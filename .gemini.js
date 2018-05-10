const { config, filepath } = require('./params')

module.exports = {
  rootUrl: '',
  screenshotsDir: config.outputDir,
  screenshotMode: 'viewport',
  compositeImage: true,
  sessionsPerBrowser: 5,
  retry: 3,
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
