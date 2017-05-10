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

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
