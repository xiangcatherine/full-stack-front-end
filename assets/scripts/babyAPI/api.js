'use strict'

const config = require('../config')
const store = require('../store')

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

module.exports = {
  createBaby
}
