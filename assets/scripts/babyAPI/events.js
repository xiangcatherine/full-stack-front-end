'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const babyApi = require('./api.js')
const babyUi = require('./ui.js')

const onGetBaby = function (event) {
  // event.preventDefault()
  babyApi.getBaby()
    .then(babyUi.getBabySuccess)
    .catch(babyUi.getBabyFailure)
}

const onCreateBaby = function (event) {
  event.preventDefault()
  const data = getFormFields(event.currentTarget)
  babyApi.createBaby(data)
    .then(babyUi.createBabySuccess)
    .catch(babyUi.createBabyFailure)
}

const onUpdateBaby = function (event) {
  event.preventDefault()
  babyApi.updateBaby()
    .then(babyUi.updateBabySuccess)
    .catch(babyUi.updateBabyFailure)
}

const addBabyHandlers = () => {
  $('.baby-stat').on('click', onUpdateBaby)
}

module.exports = {
  onGetBaby,
  onCreateBaby,
  onUpdateBaby,
  addBabyHandlers
}
