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
    let statType = req.params.statsType

    

    if(req.params.sort === 'desc') {
      BatterStats.findAll({
        where: {
          year: req.params.year,
        },
        order: [[statType, 'DESC']]
      }).then((result) => {
        res.json(result)
      }).catch(err => console.log(err))
    } else {
      BatterStats.findAll({
        where: {
          year: req.params.year,
        },
        order: [[statType, 'ASC']]
      }).then((result) => {
        res.json(result)
      }).catch(err => console.log(err))
    }
  }
}

module.exports = apisController