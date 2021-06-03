const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onViewCharacter = function () {
  $('#character-display').show()
  api.viewCharacter()
    .then(ui.onViewCharacterSuccess)
    .catch(ui.onError)
}

const onCreateCharacter = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createCharacter(formData)
    .then(ui.onCreateCharacterSuccess)
    .catch(ui.onError)
}

const onDynamicUpdateCharacter = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  api.updateCharacter(id, formData)
    .then(ui.onUpdateCharacterSuccess)
    .catch(ui.onError)
}

const onDynamicDestroyCharacter = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroyCharacter(id)
    .then(onViewCharacter)
    .then(ui.onDestroyCharacterSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreateCharacter,
  onViewCharacter,
  onDynamicUpdateCharacter,
  onDynamicDestroyCharacter
}
