'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const babyEvents = require('./babyAPI/events.js')

$(() => {
  setAPIOrigin(location, config)

  authEvents.addHandlers()

  // def register all on click handlers
  //   under neath in register all function, call the following:

  // flow in index: top level actions
  //   register handlers
  //   call auth api
  //   call baby api

  $('#input-age').on('submit', function () {
    babyEvents.onCreateBaby(event)
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
