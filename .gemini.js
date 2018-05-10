const path = require('path')

const config = require('./params')

const { dir: projectDir } = path.parse(filepath)

module.exports = {
  rootUrl: '',
  screenshotsDir: config.outputDir || projectDir,
  compositeImage: true,
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        screenResolution: '1280x960',
      },
    },
    ...config.browsers,
  },
  system: {
    plugins: {
      sauce: config.image
    },
  },
}
