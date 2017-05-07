'use strict'

const store = require('../store.js')
const babyEvents = require('../babyAPI/events.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-up').addClass('hidden')
  $('#register').addClass('hidden')
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  // store the user object:
  store.user = data.user
  console.log(data)
  $('.home-img').hide()
  $('.tagline').addClass('hidden')
  $('.sign-in-area').addClass('hidden')
  $('#change-pwd').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  babyEvents.onGetBaby(event)
}

const signInFailure = (error) => {
  console.log(error)
  console.log('Either the username or password is wrong.')
  $('#sign-in').addClass('hidden')
  $('.signInErrorMessage').removeClass('hidden')
  $('.signInErrorMessage').text('Sorry, either the username or password was incorrect.')
}

const changePasswordSuccess = (data) => {
  console.log(data)
  console.log('You have changed your password!')
  $('#change-password').addClass('hidden')
  $('#change-pwd').addClass('hidden')
}

const changePasswordFailure = (error) => {
  console.log(error)
  console.log('Sorry, your password did not change.')
}

const signOutSuccess = () => {
  console.log('You have signed out!')
  store.user = null
  $('.home-img').show()
  $('.tagline').removeClass('hidden')
  $('.sign-in-area').removeClass('hidden')
  $('#log-in').removeClass('hidden')
  $('#register').removeClass('hidden')
  $('#change-pwd').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  if ($('#sign-in').not('hidden')) {
    $('#sign-in').addClass('hidden')
  }
}

const signOutFailure = (error) => {
  console.log(error)
  console.log('Sorry, you were unable to sign out.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
