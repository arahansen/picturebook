/* eslint-disable no-undef, no-param-reassign, func-names, prefer-arrow-callback */
const { storyFolders } = require('../shared/storyFolders')

const scenarios = Object.keys(storyFolders)
  .map(kind => ({
    kind,
    storyNames: flattenDeep(getStories(storyFolders[kind])),
  }))
  .reduce(
    (prev, story) => prev.concat(story.storyNames.filter(partialSkipMatch).map(formatProperties)),
    []
  )

scenarios.forEach(page => {
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
