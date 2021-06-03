'use strict'
//
const characterEvents = require('./characters/events')
console.log('characterEvents', characterEvents)
const authEvents = require('./auth/events')
console.log('authEvents', authEvents)

$(() => {
  // CHARACTERS
  $('#character').hide()
  $('.create-character').hide()
  $('.character-button').on('click', function () {
    $('.create-character').toggle()
  })
  $('#character-display').on('click', '.character-edit', function () {
    $('.characters-update-dynamic').toggle()
  })
  $('#create-character').on('submit', characterEvents.onCreateCharacter)
  $('.view-characters-button').on('click', characterEvents.onViewCharacter)
  $('#character-display').on('click', '.characters-destroy-dynamic', characterEvents.onDynamicDestroyCharacter)
  $('#character-display').on('submit', '.characters-update-dynamic', characterEvents.onDynamicUpdateCharacter)

  // USER
  $('.change-password-toggle').hide()
  $('#change-password').hide()
  $('.sign-out').hide()
  $('.change-password-toggle').on('click', function () {
    $('#change-password').toggle()
  })
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out').on('click', authEvents.onSignOut)
})
