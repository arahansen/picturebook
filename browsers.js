module.exports = {
  chrome: {
    desiredCapabilities: {
      platform: 'macOS 10.12',
      version: 'latest',
      browserName: 'chrome',
      chromedriverVersion: '2.24',
      screenResolution: '1280x960',
    },
  },
  ie11: {
    desiredCapabilities: {
      platform: 'Windows 10',
      version: '11.103',
      browserName: 'internet explorer',
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
      platform: 'macOS 10.12',
      version: '54.0',
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
  iphone7: {
    desiredCapabilities: {
      appiumVersion: '1.6.5',
      browserName: 'Safari',
      deviceName: 'iPhone 7 Plus Simulator',
      deviceOrientation: 'portrait',
      platformName: 'iOS',
      platformVersion: '10.3',
    },
  },
  galaxy4: {
    desiredCapabilities: {
      browserName: 'Browser',
      appiumVersion: '1.6.5',
      deviceName: 'Samsung Galaxy S4 GoogleAPI Emulator',
      deviceOrientation: 'portrait',
      platformVersion: '4.4',
      platformName: 'Android',
    },
  },
}
