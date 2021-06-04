const config = require('../config')
const store = require('../store')

const createCharacter = function (formData) {
  console.log(formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/characters/',
    headers: {
      Authorization: 'Token ' + store.user.token
    },
    data: JSON.stringify(formData)
  })
}

const updateCharacter = function (id, formData) {
  console.log(formData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/characters/' + id + '/',
    headers: {
      Authorization: 'Token ' + store.user.token
    },
    data: JSON.stringify(formData)
  })
}

const viewCharacter = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/characters/',
    headers: {
      Authorization: 'Token ' + store.user.token
    }
  })
}

const destroyCharacter = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/characters/' + id,
    headers: {
      Authorization: 'Token ' + store.user.token
    }
  })
}

module.exports = {
  createCharacter,
  viewCharacter,
  destroyCharacter,
  updateCharacter
}
