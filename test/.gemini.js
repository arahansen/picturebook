const path = require('path')

const { config, filepath } = require('./config')

const { dir: projectDir } = path.parse(filepath)

module.exports = {
  rootUrl: '',
  screenshotsDir: config.outputDir || projectDir,
  compositeImage: true,
  browsers: {
    ie11: {
      desiredCapabilities: {
        platform: 'Windows 10',
        version: '11.103',
        browserName: 'internet explorer',
        screenResolution: '1280x960',
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        screenResolution: '1280x960',
      },
    },
    edge: {
      desiredCapabilities: {
        platform: 'Windows 10',
        version: '14.14393',
        browserName: 'MicrosoftEdge',
        screenResolution: '1280x960',
      },
    },
    firefox: {
      desiredCapabilities: {
        // gemini only supports up to firefox 46 due to wd.js limitations
        platform: 'macOS 10.12',
        version: '46.0',
        browserName: 'firefox',
        screenResolution: '1280x960',
      },
    },
    safari: {
      desiredCapabilities: {
        platform: 'macOS 10.12',
        version: '11.0',
        browserName: 'safari',
        screenResolution: '1280x960',
      },
    },
    // iphone7: {
    //   desiredCapabilities: {
    //     appiumVersion: '1.6.5',
    //     browserName: 'Safari',
    //     deviceName: 'iPhone 7 Plus Simulator',
    //     deviceOrientation: 'portrait',
    //     platformName: 'iOS',
    //     platformVersion: '10.3',
    //   },
    // },
  },
  system: {
    plugins: {
      sauce: config.sauce,
    },
  },
}
