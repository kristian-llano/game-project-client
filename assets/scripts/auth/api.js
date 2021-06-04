const config = require('../config')
const store = require('./../store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up/',
    data: JSON.stringify(formData)
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in/',
    data: JSON.stringify(formData)
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out/',
    headers: {
      Authorization: 'Token ' + store.user.token
    }
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-pw/',
    data: JSON.stringify(formData),
    headers: {
      Authorization: 'Token ' + store.user.token
    }
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePassword
}
