'use strict'

const store = require('../store.js')
const babyEvents = require('../babyAPI/events.js')

const signUpSuccess = (data) => {
  $('#sign-up').addClass('hidden')
  $('#register').addClass('hidden')
  document.getElementById('sign-up').reset()
  if (!$('.sign-up-error-message').hasClass('hidden')) {
    $('.sign-up-error-message').addClass('hidden')
  }
}

const signUpFailure = () => {
  $('#sign-up').addClass('hidden')
  $('.sign-up-error-message').removeClass('hidden')
  $('.sign-up-error-message').text('Sorry, try again.')
  document.getElementById('sign-up').reset()
}

const signInSuccess = (data) => {
  // store the user object:
  store.user = data.user
  $('.home-img').hide()
  $('.tagline').addClass('hidden')
  $('.sign-in-area').addClass('hidden')
  $('#change-pwd').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  document.getElementById('sign-in').reset()
  babyEvents.onGetBaby(event)
}

const signInFailure = () => {
  $('#sign-in').addClass('hidden')
  $('.signInErrorMessage').removeClass('hidden')
  document.getElementById('sign-in').reset()
  $('.signInErrorMessage').text('Sorry, either the username or password was incorrect.')
}

const changePasswordSuccess = (data) => {
  $('#change-password').addClass('hidden')
  $('.change-pwd-success').removeClass('hidden').text('Password changed successfully.')
  document.getElementById('change-password').reset()
}

const changePasswordFailure = () => {
  $('#change-password').addClass('hidden')
  $('.change-pwd-error').removeClass('hidden').text('Sorry, try again.')
  document.getElementById('change-password').reset()
}

const signOutSuccess = () => {
  store.user = null
  $('.home-img').show()
  $('.tagline').removeClass('hidden')
  $('.sign-in-area').removeClass('hidden')
  $('#log-in').removeClass('hidden')
  $('#register').removeClass('hidden')
  $('#change-pwd').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('.remove-baby').addClass('hidden')
  $('.baby-size-display').addClass('hidden')
  $('.view-baby-stat').addClass('hidden')
  $('.baby-size-text').text('')
  document.getElementById('input-age').reset()
  if ($('#sign-in').not('hidden')) {
    $('#sign-in').addClass('hidden')
  }
  if (!$('.change-pwd-success').hasClass('hidden')) {
    $('.change-pwd-success').addClass('hidden')
  }
  if (!$('.change-pwd-error').hasClass('hidden')) {
    $('.change-pwd-error').addClass('hidden')
  }
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
