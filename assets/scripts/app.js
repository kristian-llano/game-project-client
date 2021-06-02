'use strict'
//
// const poemEvents = require('./poems/events')
// console.log('poemEvents', poemEvents)
const authEvents = require('./auth/events')
console.log('authEvents', authEvents)

$(() => {
  // // POEMS
  // $('#poem').hide()
  // $('.create-poem').hide()
  // $('.poem-button').on('click', function () {
  //   $('.create-poem').toggle()
  // })
  // $('#poem-display').on('click', '.poem-edit', function () {
  //   $('.poems-update-dynamic').toggle()
  // })
  // $('#create-poem').on('submit', poemEvents.onCreatePoem)
  // $('.view-poem-button').on('click', poemEvents.onViewPoem)
  // $('#poem-display').on('click', '.poems-destroy-dynamic', poemEvents.onDynamicDestroyPoem)
  // // $('#poem-display').on('click', '.poem-edit', poemEvents.onPoemEdit)
  // // $('#poem-display').on('click', '.poem-edit-return', poemEvents.onPoemEditReturn)
  // $('#poem-display').on('submit', '.poems-update-dynamic', poemEvents.onDynamicUpdatePoem)

  // USER poem
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
