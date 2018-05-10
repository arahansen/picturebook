/* eslint-disable no-undef, no-param-reassign, func-names, prefer-arrow-callback */
const { config } = require('../config')

config.scenarios.forEach(page => {
  gemini.suite(page.label, suite => {
    suite
      .setUrl(page.url)
      .before(function(actions) {
        actions.executeJS(function(window) {
          const body = window.document.querySelector('body')
          body.style.padding = 0
          body.style.height = '100vh'
          body.style.width = '100vw'
        })
      })
      .setCaptureElements('body')
      .capture('baseline')
  })
})
