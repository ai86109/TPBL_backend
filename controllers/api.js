const db = require('../models')
const Standings = db.Standings

const apisController = {
  getStandings: (req, res) => {
    Standings.findAll({
      order: [['teamRank', 'ASC']]
    }).then((result) => {
      res.json(result)
    }).catch(err => console.log(err))
  }
}

module.exports = apisController