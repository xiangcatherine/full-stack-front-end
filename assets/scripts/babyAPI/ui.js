'use strict'

const store = require('../store.js')

const createBabySuccess = (response) => {
  console.log('Yay! We have a baby!')
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
}

const updateBabyFailure = (error) => {
  console.log(error)
  console.log('Failed to update baby')
}

module.exports = {
  getBabySuccess,
  getBabyFailure,
  createBabySuccess,
  createBabyFailure,
  updateBabySuccess,
  updateBabyFailure
}
