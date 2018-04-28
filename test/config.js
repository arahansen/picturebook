const cosmiconfig = require('cosmiconfig')

const explorer = cosmiconfig('crosswatch', { sync: true })

const result = explorer.load('.')

if (!result) {
  throw new Error('Could not find crosswatch configuration')
}

module.exports = result
