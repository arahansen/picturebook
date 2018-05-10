/* eslint-disable */
const { resolve } = require('path')
const { runImageComparisonSuites } = require('../test')

const pictureDir = resolve(__dirname, '../')
const configDir = resolve(pictureDir, 'config')

module.exports = {
  start() {
    process.argv.push('-c', configDir)
    require('@storybook/react/dist/server')
  },
  build() {
    process.argv.push('-c', configDir)
    require('@storybook/react/dist/server/build')
  },
  image() {
    return runImageComparisonSuites()
  },
}
