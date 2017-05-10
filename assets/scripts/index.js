'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const babyEvents = require('./babyAPI/events.js')

$(() => {
  setAPIOrigin(location, config)

  authEvents.addHandlers()
  babyEvents.addBabyHandlers()

  $('#input-age').on('submit', function () {
    babyEvents.onCreateBaby(event)
  })
})

window.onload = function () {
  document.body.removeAttribute('class')
}

require('./example')
