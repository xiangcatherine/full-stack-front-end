'use strict'

const store = require('../store.js')

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
  $('.sign-in-area').addClass('hidden')
  $('#change-pwd').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('.home-img').hide()
  $('.input-age-area').removeClass('hidden')
}

const signInFailure = (error) => {
  console.log(error)
  console.log('Either the username or password is wrong.')
  $('#sign-in').addClass('hidden')
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
  $('#log-in').removeClass('hidden')
  $('#register').removeClass('hidden')
  $('#change-pwd').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
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
