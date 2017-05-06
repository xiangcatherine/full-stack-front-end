'use strict'

const config = require('../config')
const store = require('../store')

const getBaby = () => {
  return $.ajax({
    url: config.apiOrigin + '/babies',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const createBaby = (data) => {
  console.log(`createBaby(${JSON.stringify(data)})`)

  return $.ajax({
    url: config.apiOrigin + '/babies',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateBaby = () => {
  return $.ajax({
    url: config.apiOrigin + '/babies/' + store.babyId,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBaby,
  createBaby,
  updateBaby
}
