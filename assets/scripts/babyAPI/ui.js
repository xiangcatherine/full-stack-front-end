'use strict'

const createBabySuccess = (response) => {
  console.log('Yay! We have a baby!')
}

const createBabyFailure = (error) => {
  console.error(error)
}

const getBabySuccess = (response) => {
  console.log('Yay! We have some baby data!')
  console.log(response)
  if (response['baby'] === null) {
    $('.input-age-area').removeClass('hidden')
  } else {
    $('.view-baby-stat').removeClass('hidden')
  }
}

const getBabyFailure = (error) => {
  console.error(error)
}

module.exports = {
  getBabySuccess,
  getBabyFailure,
  createBabySuccess,
  createBabyFailure
}
