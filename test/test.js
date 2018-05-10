/* eslint-disable no-underscore-dangle, no-use-before-define, no-console */

const Gemini = require('gemini')
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { config } = require('../params')

const gemini = new Gemini(path.resolve(__dirname, '../.gemini.js'))

gemini.on(gemini.events.TEST_RESULT, ({ currentPath, suite, browserId }) => {
  const image = fs.readFileSync(currentPath)
  const resultDir = path.resolve(config.outputDir, `${suite.name}/result`)
  const resultImagePath = path.resolve(resultDir, `${browserId}.png`)

  mkdirp.sync(resultDir)
  fs.writeFileSync(resultImagePath, image)
})

function testBaselineImages() {
  return gemini.test(path.resolve(__dirname, './index.spec.js'), {
    reporters: ['flat'],
  })
}

module.exports = { testBaselineImages }
