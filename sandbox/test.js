const sharp = require('sharp')
const resemblejs = require('node-resemble-js')
const { moveSync } = require('fs-extra')
const path = require('path')
const { existsSync, createWriteStream } = require('fs')

sharp.concurrency(1)

function moveFile(origin, destination, attempt = 0) {
  return new Promise((done, reject) => {
    if (existsSync(origin)) {
      moveSync(origin, destination, { overwrite: true })
      done()
    } else if (attempt < 3) {
      setTimeout(() => {
        moveFile(origin, destination, attempt + 1)
      }, 100)
    } else {
      reject(new Error('Unable to find file'))
    }
  })
}

function cropImage({ imagePath, browserId }) {
  return sharp(imagePath)
    .extract({
      top: 0,
      left: 0,
      width: 1200,
      height: 700,
    })
    .toFile('sandbox/temp.png')
    .then(() => moveFile('sandbox/temp.png', `sandbox/${browserId}.png`))

  // .then(
  //   () =>
  //     new Promise(resolve =>
  //       setTimeout(() => {
  //         moveFile('temp.png', imagePath)
  //         resolve()
  //       }, 100)
  //     )
  // )
  // .then(() => moveFile(tempFilePath, imagePath))
}

async function compareImageToBaseline(resultPath, baselinePath, browserId) {
  // const resultSize = imageSize(resultPath)
  // const baselineSize = imageSize(baselinePath)

  // const height = Math.min(resultSize.height, baselineSize.height)
  // const width = Math.min(resultSize.width, baselineSize.width)
  // const diffHeight = Math.abs(resultSize.height - baselineSize.height)
  // const diffWidth = Math.abs(resultSize.width - baselineSize.width)

  await cropImage({ imagePath: resultPath, browserId })
  await cropImage({ imagePath: baselinePath, browserId: 'chrome' })
  // await cropImage({ imagePath: baselinePath, browserId })

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
    }

    resemblejs.outputSettings(options)

    resemblejs(baselinePath)
      .compareTo(resultPath)
      .onComplete(
        data =>
          console.log(data) ||
          data
            .getDiffImage()
            .pack()
            .pipe(createWriteStream('sandbox/output.png'))
      )
  })
}

compareImageToBaseline(
  '/Users/home/Documents/webdev/picturebook/sandbox/ie11.png',
  '/Users/home/Documents/webdev/picturebook/sandbox/chrome.png',
  'ie11'
)
