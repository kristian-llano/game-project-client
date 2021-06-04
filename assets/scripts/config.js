'use strict'

let apiUrl
const apiUrls = {
  production: 'https://game-project-api-llano.herokuapp.com',
  development: 'http://localhost:8000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
