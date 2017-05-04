'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-up').addClass('hidden')
}

const signUpFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
