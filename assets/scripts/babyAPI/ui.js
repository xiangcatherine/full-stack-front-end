'use strict'

const store = require('../store.js')
const babyDisplay = require('../babyLogic/main.js')

const createBabySuccess = (response) => {
  console.log('Yay! We have a baby!')
  $('.input-age-area').addClass('hidden')
  babyDisplay.getImgBasedOnAge(response)
  babyDisplay.getBabySizeText(response)
}

const createBabyFailure = (error) => {
  console.error(error)
}

const getBabySuccess = (response) => {
  console.log('Yay! We have some baby data!')
  console.log(response)
  if (response === null) {
    $('.input-age-area').removeClass('hidden')
  } else {
    store.babyId = response['baby']['id']
    $('.view-baby-stat').removeClass('hidden')
  }
}

const getBabyFailure = (error) => {
  console.error(error)
  console.log('No get baby')
}

const updateBabySuccess = (response) => {
  console.log(response)
  console.log('Updated baby successfully!')
  $('.view-baby-stat').addClass('hidden')
  if ($('.baby-size-display').css('display', 'none')) {
    $('.baby-size-display').css('display', 'block')
  }
  if ($('.baby-size-text').hasClass('hidden')) {
    $('.baby-size-text').removeClass('hidden')
  }
  if (!$('#change-password').hasClass('hidden')) {
    $('#change-password').addClass('hidden')
  }
  babyDisplay.getImgBasedOnAge(response)
  babyDisplay.getBabySizeText(response)
}

const updateBabyFailure = (error) => {
  console.log(error)
  console.log('Failed to update baby')
}

const deleteBabySuccess = () => {
  console.log('removed baby!')
  $('.baby-size-img').css('display', 'none')
  $('view-baby-stat').addClass('hidden')
  $('.input-age-area').removeClass('hidden')
  $('.baby-size-text').text('')
}

const deleteBabyFailure = (error) => {
  console.log('Could not remove baby.')
  console.error(error)
}

module.exports = {
  getBabySuccess,
  getBabyFailure,
  createBabySuccess,
  createBabyFailure,
  updateBabySuccess,
  updateBabyFailure,
  deleteBabySuccess,
  deleteBabyFailure
}
