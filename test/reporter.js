/* eslint-disable no-console, no-use-before-define, prefer-template */

/**
 * Reporter based on gemini flat reporter:
 * https://github.com/gemini-testing/gemini/blob/master/lib/reporters/flat-factory/flat.js
 */

const _ = require('lodash')
const chalk = require('chalk')

const ICON_SUCCESS = chalk.green('✓')
const ICON_NOT_UPDATED = chalk.gray('✓')
const ICON_FAIL = chalk.red('✘')
const ICON_WARN = chalk.bold.yellow('!')
const ICON_RETRY = chalk.yellow('⟳')

function attachRunner(runner, gemini) {
  runner.on(gemini.events.TEST_RESULT, onTestResult)
  runner.on(gemini.events.UPDATE_RESULT, onUpdateResult)
  runner.on(gemini.events.RETRY, onRetry)
  runner.on(gemini.events.ERROR, onError)
  runner.on(gemini.events.END, onEnd)
  runner.on(gemini.events.INFO, onInfo)
  runner.on(gemini.events.SKIP_STATE, onSkipState)
}

function onTestResult(result) {
  const handler = result.equal ? onPassed : onError
  handler(result)
}

function onUpdateResult(result) {
  const handler = result.updated ? onUpdated : onNotUpdated
  handler.call(this, result)
}

function onRetry(result) {
  console.log(`${ICON_RETRY} Retrying: ${formatRetryInfo(result)}`)
  logError(result)
}

function onPassed(result) {
  console.log(`${ICON_SUCCESS} ${formatStateInfo(result)}`)
}

function onUpdated(result) {
  console.log(`${ICON_SUCCESS} Captured: ${formatStateInfo(result)}`)
}

function onNotUpdated(result) {
  console.log(`${ICON_NOT_UPDATED} Image Unchanged: ${formatStateInfo(result)}`)
}

function onError(result) {
  console.log(`${ICON_FAIL} Capture Failure: ${formatStateInfo(result)}`)
  logError(result)
}

function onSkipState(result) {
  const skipReason = result.suite.skipComment
    ? chalk.yellow(`reason: ${result.suite.skipComment}`)
    : ''

  console.log(`${ICON_WARN} ${formatStateInfo(result)} ${skipReason}`)
}

function onInfo(result) {
  console.warn(result.message)
}

function onEnd(result) {
  const message = [
    'Total:   ' + chalk.underline(result.total),
    'Updated: ' + (result.updated > 0 ? chalk.green(result.updated) : chalk.cyan(result.updated)),
    'Failed:  ' + (result.failed > 0 ? chalk.red(result.failed) : chalk.cyan(result.failed)),
    'Skipped: ' + chalk.cyan(result.skipped),
    'Retries: ' + chalk.cyan(result.retries),
  ]

  console.log('\nScreenshot Capture Results:\n')
  console.log(_.compact(message).join('\n'), '\n')
}

function logError(result) {
  if (result.message) {
    console.error(result.message)
  }

  if (result.originalError && result.originalError.stack) {
    console.error(result.originalError.stack)
  }
}

function formatRetryInfo(result) {
  const stateInfo = formatStateInfo(result)
  const { retriesLeft } = result

  return `${stateInfo} will be retried. Retries left: ${chalk.yellow(retriesLeft)}`
}

function formatStateInfo(result) {
  const state = result.state && chalk.underline(result.suite.name)
  const browserId = `[${chalk.yellow(result.browserId)}]`

  return _([state, browserId])
    .compact()
    .join(' ')
}

module.exports = { attachRunner }
