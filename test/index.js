const { testBaselineImages } = require('./test')
const { updateBaselineImages } = require('./update')

function runImageComparisonSuites() {
  const isUpdate = ['-u', '--updateScreenshot'].some(flag => process.argv.indexOf(flag) > -1)

  if (isUpdate) {
    return updateBaselineImages()
  }

  return testBaselineImages()
}

module.exports = { runImageComparisonSuites }
