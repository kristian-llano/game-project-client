const store = require('../store')

const onCreateCharacterSuccess = function (response) {
  store.user.character = response.character
  $('.character-create-message').show()
  $('.character-create-message').text('Character created successfully')
  setTimeout(function () {
    $('.character-create-message').fadeOut('slow')
  }, 3000)
  $('.create-character').toggle()
  $('form').trigger('reset')
}

const onViewCharacterSuccess = function (response) {
  $('#character-view-message').show()
  const characters = response.characters
  if (characters === ['']) {
    $('#character-view-message').text('You don\'t have any characters!')
  } else {
    $('#character-view-message').text('Here are your created characters:')
    let charactersHtml = ''
    characters.forEach(character => {
      charactersHtml += `
      <hr>
      <h4>Name: ${character.name}</h4>
      <p>Class: Level ${character.level} ${character.classes}</p>
      <button class="character-edit">Edit character</button>
      <button class='characters-destroy-dynamic' data-id=${character.id}>
        Delete character
      </button>
      <form class="characters-update-dynamic" data-id=${character.id}>
        <input name='character[name]' type='text' placeholder='Name' required>
        <label for='character[classes]'>Class:</label>
          <select name='character[classes]' required>
            <option value="Knight">Knight</option>
            <option value="Wizard">Wizard</option>
            <option value="Ranger">Ranger</option>
          </select>
        <button>Update character</button>
      </form>
      `
    })
    $('#character-display').html(charactersHtml)
    $('.characters-update-dynamic').hide()
  }
}

const onDestroyCharacterSuccess = function () {
  $('#character-delete-message').text('Character deleted successfully')
  $('#character-delete-message').show()
  setTimeout(() => {
    $('#character-delete-message').fadeOut('slow')
  }, 3000)
}

const onUpdateCharacterSuccess = function () {
  $('#character-update-message').text('Character updated successfully')
  $('#character-update-message').show()
  $('.characters-update-dynamic').toggle()
  setTimeout(() => {
    $('#character-update-message').fadeOut('slow')
  }, 3000)
}

const onError = function (err) {
  console.error(err)
  $('#error-message').text('Something went wrong, please try again.')
  $('#error-message').show()
  setTimeout(function () {
    $('#error-message').fadeOut('slow')
  }, 3000)
}

module.exports = {
  onDestroyCharacterSuccess,
  onCreateCharacterSuccess,
  onViewCharacterSuccess,
  onUpdateCharacterSuccess,
  onError
}
