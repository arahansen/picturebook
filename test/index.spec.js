/* eslint-disable no-undef, no-param-reassign, func-names, prefer-arrow-callback */
const { config } = require('./config')

config.scenarios.forEach(page => {
  gemini.suite(page.label, suite => {
    suite
      .setUrl(page.url)
      .before(function(actions) {
        actions.executeJS(function(window) {
          window.document.querySelector('[data-picturebook-test-id="root"]').className += ' isCI'
          // window.document.querySelector('[data-picturebook-test-id="root"]').style.overflow =
          //   'hidden'

          // window.document.body.style.overflow = 'hidden'
        })
      })
      .setCaptureElements('body')
      .capture('results')
  })
})
