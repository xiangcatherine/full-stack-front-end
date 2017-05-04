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
  if ($('#sign-up').not('hidden')) {
    $('#sign-up').addClass('hidden')
  }
}

const signInFailure = (error) => {
  console.log(error)
  console.log('Either the username or password is wrong.')
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
