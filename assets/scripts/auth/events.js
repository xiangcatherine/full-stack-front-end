'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const uxEvents = require('../userexperience/main.js')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignin = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch()
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignin)
  $('#change-password').on('submit', onChangePassword)
  $('.sign-out-button').on('click', onSignOut)
  $('#register').on('click', function () {
    uxEvents.signUpAppear()
    if ($('#sign-in').not('hidden')) {
      $('#sign-in').addClass('hidden')
    }
    if ($('.signInErrorMessage').not('hidden')) {
      $('.signInErrorMessage').addClass('hidden')
    }
    if ($('.sign-up-error-message').not('hidden')) {
      $('.sign-up-error-message').addClass('hidden')
    }
  })
  $('#log-in').on('click', function () {
    uxEvents.signInAppear()
    if ($('#sign-up').not('hidden')) {
      $('#sign-up').addClass('hidden')
    }
    if ($('.signInErrorMessage').not('hidden')) {
      $('.signInErrorMessage').addClass('hidden')
    }
    if ($('.sign-up-error-message').not('hidden')) {
      $('.sign-up-error-message').addClass('hidden')
    }
  })
  $('#change-pwd').on('click', function () {
    uxEvents.changePasswordAppear()
    if (!$('.change-pwd-error').hasClass('hidden')) {
      $('.change-pwd-error').addClass('hidden')
    }
    if (!$('.change-pwd-success').hasClass('hidden')) {
      $('.change-pwd-success').addClass('hidden')
    }
  })
  $('#log-out').on('click', function () {
    uxEvents.signUpAppear()
    uxEvents.signInAppear()
  })
}

module.exports = {
  addHandlers
}
