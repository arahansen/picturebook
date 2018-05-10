/* eslint-disable no-underscore-dangle, no-use-before-define, no-console */

const Gemini = require('gemini')
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { attachRunner } = require('./reporter')

const gemini = new Gemini(path.resolve(__dirname, '../.gemini.js'))

gemini.on(gemini.events.TEST_RESULT, ({ currentPath, suite, browserId }) => {
  const image = fs.readFileSync(currentPath)
  const resultPath = path.resolve(__dirname, `../screenshots/${suite.name}/result/${browserId}.png`)

  mkdirp.sync(path.resolve(__dirname, `../screenshots/${suite.name}/result`))
  fs.writeFileSync(resultPath, image)
})

gemini
  .test(path.resolve(__dirname, './index.spec.js'), {
    reporters: [runner => attachRunner(runner, gemini)],
  })
  .then(res => {
    console.log(res)
  })
