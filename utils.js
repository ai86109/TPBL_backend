const jwt = require('jsonwebtoken')
const SECRET = 'welcometotpblwebsite'

const utils = {
  generateAuthToken: (username) => {
    return jwt.sign(
      {username, username},
      SECRET
    )
  },

  getAuthToken: (req) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    return jwt.verify(token, SECRET)
  }
}

module.exports = utils