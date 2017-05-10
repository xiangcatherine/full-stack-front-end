'use strict'

const store = require('../store.js')
const babyDisplay = require('../babyLogic/main.js')

const createBabySuccess = (response) => {
  $('.input-age-area').addClass('hidden')
  $('.remove-baby').removeClass('hidden')
  if ($('.baby-size-display').hasClass('hidden')) {
    $('.baby-size-display').removeClass('hidden')
  }
  if ($('.baby-size-text').hasClass('hidden')) {
    $('.baby-size-text').removeClass('hidden')
  }
  document.getElementById('input-age').reset()
  babyDisplay.getImgBasedOnAge(response)
  babyDisplay.getBabySizeText(response)
}

const getBabySuccess = (response) => {
  if (response === null) {
    $('.input-age-area').removeClass('hidden')
  } else {
    store.babyId = response['baby']['id']
    $('.view-baby-stat').removeClass('hidden')
    if ($('.remove-baby').hasClass('hidden')) {
      $('.remove-baby').removeClass('hidden')
    }
  }
}

const updateBabySuccess = (response) => {
  $('.view-baby-stat').addClass('hidden')
  if ($('.baby-size-display').hasClass('hidden')) {
    $('.baby-size-display').removeClass('hidden')
  }
  if ($('.baby-size-text').hasClass('hidden')) {
    $('.baby-size-text').removeClass('hidden')
  }
  if (!$('#change-password').hasClass('hidden')) {
    $('#change-password').addClass('hidden')
  }
  if (!$('.change-pwd-success').hasClass('hidden')) {
    $('.change-pwd-success').addClass('hidden')
  }
  if ($('.remove-baby').hasClass('hidden')) {
    $('.remove-baby').removeClass('hidden')
  }
  babyDisplay.getImgBasedOnAge(response)
  babyDisplay.getBabySizeText(response)
}

const updateBabyFailure = () => {
  $('.update-baby-error').text("Sorry, we were unable to get you're baby's status. Please try again!")
}

const deleteBabySuccess = () => {
  $('.baby-size-img').css('display', 'none')
  $('view-baby-stat').addClass('hidden')
  $('.input-age-area').removeClass('hidden')
  $('.baby-size-text').text('')
  $('.remove-baby').addClass('hidden')
  if (!$('#change-password').hasClass('hidden')) {
    $('#change-password').addClass('hidden')
  }
  if (!$('.change-pwd-success').hasClass('hidden')) {
    $('.change-pwd-success').addClass('hidden')
  }
  if (!$('.change-pwd-error').hasClass('hidden')) {
    $('.change-pwd-error').addClass('hidden')
  }
  if (!$('.view-baby-stat').hasClass('hidden')) {
    $('.view-baby-stat').addClass('hidden')
  }
}

const deleteBabyFailure = () => {
  $('.remove-baby-message').text('Sorry, we were unable to reset.')
}

module.exports = {
  getBabySuccess,
  createBabySuccess,
  updateBabySuccess,
  updateBabyFailure,
  deleteBabySuccess,
  deleteBabyFailure
}
