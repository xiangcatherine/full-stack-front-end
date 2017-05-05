'use strict'

const createBabySuccess = (response) => {
  console.log('Yay! We have a baby!')
}

const createBabyFailure = (error) => {
  console.error(error)
}

module.exports = {
  createBabySuccess,
  createBabyFailure
}
