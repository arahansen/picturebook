const path = require('path')

const { config, filepath } = require('./params')

module.exports = {
  rootUrl: '',
  screenshotsDir: config.outputDir || filepath,
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
      sauce: {
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
      },
    },
  },
}
