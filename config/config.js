/* eslint-disable */

import { configure, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import JSXAddon from 'storybook-addon-jsx'
import { config } from '../params'

if (
  typeof window === 'object' &&
  window.navigator &&
  /node\.js/i.test(window.navigator.userAgent)
) {
  var addons = require('@storybook/addons').default
  var Channel = require('@storybook/channels').default
  addons.setChannel(
    new Channel({
      transport: {
        setHandler: function() {},
        send: function() {},
      },
    })
  )
}

setOptions({
  downPanelInRight: true,
  hierarchySeparator: /\./,
  name: config.projectName,
  url: config.projectUrl,
})

setAddon(JSXAddon)

configure(() => {
  require(preval`module.exports=require('../params').config.entryPoint`)
}, module)
