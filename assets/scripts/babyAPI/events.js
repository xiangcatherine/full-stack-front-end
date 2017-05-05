'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const babyApi = require('./api.js')
const babyUi = require('./ui.js')

const onCreateBaby = function (event) {
  event.preventDefault()
  const data = getFormFields(event.currentTarget)
  babyApi.createBaby(data)
    .then(babyUi.createBabySuccess)
    .catch(babyUi.createBabyFailure)
}

module.exports = {
  onCreateBaby
}
