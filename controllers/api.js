const db = require('../models')
const Standings = db.Standings
const BatterStats = db.BatterStats

const apisController = {
  getStandings: (req, res) => {
    Standings.findAll({
      where: {
        year: req.params.year,
        season: req.params.season
      },
      order: [['teamRank', 'ASC']]
    }).then((result) => {
      res.json(result)
    }).catch(err => console.log(err))
  },

  getBatterStats: (req, res) => {
    BatterStats.findAll({
      where: {
        
      }
    })
  }
}

module.exports = apisController