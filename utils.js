const jwt = require('jsonwebtoken')
const SECRET = 'welcometotpblwebsite'

const utils = {
  generateAuthToken: (username) => {
    return jwt.sign(
      {username, username},
      SECRET
    )
  },

  getAuthToken: (token) => {
    return jwt.verify(token, SECRET)
  }
}

module.exports = utils
