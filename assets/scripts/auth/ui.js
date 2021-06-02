
const store = require('./../store')

const onSignUpSuccess = function (responseData) {
  $('#sign-up-message').text('Account successfully created!')
  $('#sign-up-message').fadeIn('fast')
  setTimeout(function () {
    $('#sign-up-message').fadeOut('slow')
  }, 3000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  store.user = responseData.user
  $('#sign-in-message').text('Successfully logged in!')
  $('#sign-in-message').fadeIn('fast')
  setTimeout(function () {
    $('#sign-in-message').fadeOut('slow')
  }, 3000)
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.sign-out').show()
  $('#poem').show()
  $('.change-password-toggle').show()
}

const onSignOutSuccess = function (responseData) {
  store.user = null
  $('#sign-out-message').text('Successfully logged out!')
  $('#sign-out-message').fadeIn('fast')
  setTimeout(function () {
    $('#sign-out-message').fadeOut('slow')
  }, 3000)
  $('form').trigger('reset')
  $('.sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('.change-password-toggle').hide()
  $('#change-password').hide()
  $('#poem').hide()
  $('#poem-display').hide()
  $('#poem-view-message').hide()
}

const onChangePasswordSuccess = function (responseData) {
  $('#change-password-message').text('Successfully changed password!')
  $('#change-password-message').fadeIn('fast')
  setTimeout(function () {
    $('#change-password-message').fadeOut('slow')
  }, 3000)
  $('form').trigger('reset')
  $('#change-password').hide()
}

const onError = function (err) {
  console.error(err)
  $('#error-message').text('Something went wrong, please try again.')
  $('#error-message').fadeIn('fast')
  setTimeout(function () {
    $('#error-message').fadeOut('slow')
  }, 3000)
}

module.exports = {
  onSignInSuccess,
  onSignOutSuccess,
  onSignUpSuccess,
  onError,
  onChangePasswordSuccess
}
