/* eslint-disable no-underscore-dangle, no-use-before-define, no-console */

const Gemini = require('gemini')
const path = require('path')
const { attachRunner } = require('./reporter')

const gemini = new Gemini(path.resolve(__dirname, '../.gemini.js'))

gemini
  .update(path.resolve(__dirname, './index.spec.js'), {
    reporters: [runner => attachRunner(runner, gemini)],
  })
  .then(res => {
    console.log(res)
  })
