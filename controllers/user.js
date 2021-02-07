const db = require('../models')
const bcrypt = require('bcryptjs')
const { Users } = db
const { errorMessage1, errorMessage2, successMessage } = require('../serverMessage')
const { generateAuthToken, getAuthToken } = require('../utils')

const usersController = {
  me: (req, res) => {
    const decoded = getAuthToken(req)

    Users.findOne({
      where: {
        username: decoded.username,
        token
      }
    }).then((me) => {
      if(!me) {
        return res.json(errorMessage1)
      }
      return res.json(successMessage)
    }).catch(err => {
      return res.json({
        ok: 0,
        message: err
      })
    })
  },

  login: (req, res) => {
    const { username, password } = req.body
    if(!username || !password) {
      return res.json(errorMessage1)
    }
    Users.findOne({
      where: {
        username
      }
    }).then((user) => {
      if(!user) {
        return res.json(errorMessage2)
      }
      bcrypt.compare(password, user.password, (error, isSuccess) => {
        if(error || !isSuccess) {
          return res.json(errorMessage2)
        }
        const newAuthToken = generateAuthToken(username)
        user.update({
          token: newAuthToken,
        }).catch(err => console.log(err))

        const loginMessage = {
          ok: 1,
          token: newAuthToken
        }
        return res.json(loginMessage)
      })
    }).catch(err =>{
      return res.json({
        ok: 0,
        message: err
      })
    })
  }
}

module.exports = usersController