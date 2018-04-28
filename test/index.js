/* eslint-disable no-underscore-dangle, no-use-before-define, no-console */

const Gemini = require('gemini')
const path = require('path')
const resemblejs = require('resemblejs')
const { moveSync } = require('fs-extra')
const { existsSync } = require('fs')
const _ = require('lodash')
const imageSize = require('image-size')
const sharp = require('sharp')
const { attachRunner } = require('./reporter')
const { config } = require('./config')

const gemini = new Gemini(path.resolve(__dirname, './.gemini.js'))
const testPath = path.resolve(__dirname, './index.spec.js')

const mobileBrowserIds = ['iphone7', 'galaxy4']

const extract = {
  chrome: {
    top: 0,
    left: 0,
    width: 1280,
    height: 854,
  },
  ie11: {
    top: 0,
    left: 0,
    width: 1000,
    height: 854,
  },
  edge: {
    top: 0,
    left: 0,
    width: 1280,
    height: 854,
  },
  safari: {
    top: 0,
    left: 0,
    width: 1280,
    height: 854,
  },
}

gemini
  .update(path.resolve(__dirname, './index.spec.js'), {
    reporters: [runner => attachRunner(runner, gemini)],
  })
  .then(({ failed }) => {
    if (failed > 0) {
      throw new Error('Updating images failed')
    }
  })
// try {
//   testImageResults()
// } catch (e) {
//   console.log(e)
// }

function moveFile(origin, destination) {
  if (existsSync(origin)) {
    moveSync(origin, destination, { overwrite: true })
  } else {
    throw new Error('Unable to find file')
  }
}

function cropImage({ imagePath, browserId }) {
  // const extract = extractMap[browserId]

  if (!extract[browserId]) {
    // console.log('not extracting', browserId)
    return Promise.resolve()
  }

  return sharp(imagePath)
    .resize(1000, 1000)
    .toFile(`temp_${imagePath}.png`)
  // .then(() =)
  // .then(() => moveFile(tempFilePath, imagePath))
}

async function compareImageToBaseline(resultPath, baselinePath, browserId) {
  const resultSize = imageSize(resultPath)
  const baselineSize = imageSize(baselinePath)

  const height = Math.min(resultSize.height, baselineSize.height)
  const width = Math.min(resultSize.width, baselineSize.width)
  const diffHeight = Math.abs(resultSize.height - baselineSize.height)
  const diffWidth = Math.abs(resultSize.width - baselineSize.width)

  await cropImage({ imagePath: resultPath, browserId })
  await cropImage({ imagePath: baselinePath, browserId })

  return new Promise(resolve => {
    const options = {
      errorColor: {
        red: 225,
        green: 0,
        blue: 255,
      },
      errorType: 'movement',
      transparency: 0.1,
      largeImageThreshold: 1200,
      scaleToSameSize: true,
      ignore: ['antialiasing'],
    }

    resemblejs.compare(
      baselinePath,
      resultPath,
      options,
      (err, data) =>
        data.misMatchPercentage > config.tolerance &&
        console.log({
          misMatchPercentage: data.misMatchPercentage,
          dimensionDifference: data.dimensionDifference,
          resultPath,
        })
    )

    // resemblejs.compare(
    //   baselinePath,
    //   resultPath,
    //   options,
    //   (err, data) =>
    //     data.misMatchPercentage > config.tolerance &&
    //     console.log({
    //       misMatchPercentage: data.misMatchPercentage,
    //       dimensionDifference: data.dimensionDifference,
    //       resultPath,
    //     })
    // )

    // resemblejs(baselinePath)
    //   .compareTo(resultPath)
    //   .scaleToSameSize()
    //   .ignoreAntialiasing()
    //   .onComplete(

    //   )
  })
}

// function findSmallestImageDimensions(imagePaths) {
//   return imagePaths.map(sizeOf).reduce((prev, dimensions) => console.log(dimensions))
// }

// function cropImageResults(imageCaptureResults) {
//   imageCaptureResults.forEach(imageCaptureResult => {
//     console.log(imageCaptureResult)
//     const imagePaths = imageCaptureResult.resultImages.map(({ imagePath }) => imagePath)
//     findSmallestImageDimensions(imagePaths)
//   })
//   // const imagePaths = imageCaptureResults
//   //   .map(result => result.resultImages)
//   //   .reduce((prev, resultImage) => [...prev, ...resultImage], [])

//   // console.log(imagePaths.map(cropImage))

//   // TODO crop image based on required dimensions by browserId
// }

function getImageCaptureResults() {
  return gemini
    .readTests(testPath)
    .then(collection =>
      collection.allSuites().map(suite => {
        if (!suite.states.length) {
          return undefined
        }

        return {
          ...config.scenarios.find(scenario => scenario.url === suite.url),
          resultImages: gemini.browserIds.map(browserId => ({
            imagePath: gemini.getScreenshotPath(suite, suite.states[0].name, browserId),
            browserId,
          })),
        }
      })
    )
    .then(_.compact)
}

async function compareSuiteToBaseline(imageCaptureResult) {
  const { resultImages } = imageCaptureResult

  const baselineImage = resultImages.find(image => image.browserId === 'chrome')

  const results = await Promise.all(
    resultImages
      .filter(({ browserId }) => !mobileBrowserIds.includes(browserId))
      .map(async resultImage => {
        const { misMatchPercentage } = await compareImageToBaseline(
          resultImage.imagePath,
          baselineImage.imagePath,
          resultImage.browserId
        )
        return {
          ...resultImage,
          misMatchPercentage,
        }
      })
  )

  return results.map((result, i) => ({ ...result, ...imageCaptureResult[i] }))
}

async function testImageResults() {
  const imageCaptureResults = await getImageCaptureResults()

  const comparisonResults = await Promise.all(imageCaptureResults.map(compareSuiteToBaseline))

  const passed = comparisonResults.every(result =>
    result.every(image => image.misMatchPercentage < config.tolerance)
  )

  if (passed) {
    console.log('Crosswatch Success! 🎉')
    process.exit(0)
  } else {
    console.error('Crosswatch Failed! ❌')
    process.exit(1)
  }
}
