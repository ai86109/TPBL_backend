const db = require('../models')
const { Op } = require("sequelize");
const Standings = db.Standings
const BatterStats = db.BatterStats
const PitcherStats = db.PitcherStats
const TeamBatterStats = db.TeamBatterStats
const TeamPitcherStats = db.TeamPitcherStats

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
    const paRules = ['avg', 'obp', 'slg', 'ops', 'goao', 'babip', 'iso', 'abhr', 'bbso', 'bbpa', 'sopa']

    if(paRules.includes(statType)) {
      if(req.params.sort === 'desc') {
        BatterStats.findAll({
          where: {
            year: req.params.year,
            pa: {
              [Op.gte]: 372,
            },
          },
          order: [[statType, 'DESC']]
        }).then((result) => {
          res.json(result)
        }).catch(err => console.log(err))
      } else {
        BatterStats.findAll({
          where: {
            year: req.params.year,
            pa: {
              [Op.gte]: 372,
            },
          },
          order: [[statType, 'ASC']]
        }).then((result) => {
          res.json(result)
        }).catch(err => console.log(err))
      }
    } else {
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
  },

  getPitcherStats: (req, res) => {
    let statType = req.params.statsType
    const gamesRules = ['era', 'whip', 'so9', 'bb9', 'sobb']

    if(gamesRules.includes(statType)) {
      if(req.params.sort === 'desc') {
        PitcherStats.findAll({
          where: {
            year: req.params.year,
            ip: {
              [Op.gte]: 120,
            },
          },
          order: [[statType, 'DESC']]
        }).then((result) => {
          res.json(result)
        }).catch(err => console.log(err))
      } else {
        PitcherStats.findAll({
          where: {
            year: req.params.year,
            ip: {
              [Op.gte]: 120,
            },
          },
          order: [[statType, 'ASC']]
        }).then((result) => {
          res.json(result)
        }).catch(err => console.log(err))
      }
    } else {
      if(req.params.sort === 'desc') {
        PitcherStats.findAll({
          where: {
            year: req.params.year,
          },
          order: [[statType, 'DESC']]
        }).then((result) => {
          res.json(result)
        }).catch(err => console.log(err))
      } else {
        PitcherStats.findAll({
          where: {
            year: req.params.year,
          },
          order: [[statType, 'ASC']]
        }).then((result) => {
          res.json(result)
        }).catch(err => console.log(err))
      }
    }
  },

  getTeamBatterStats: (req, res) => {
    let statType = req.params.statsType

    if(req.params.sort === 'desc') {
      TeamBatterStats.findAll({
        where: {
          year: req.params.year,
          season: 'full',
        },
        order: [[statType, 'DESC']]
      }).then((result) => {
        res.json(result)
      }).catch(err => console.log(err))
    } else {
      TeamBatterStats.findAll({
        where: {
          year: req.params.year,
          season: 'full',
        },
        order: [[statType, 'ASC']]
      }).then((result) => {
        res.json(result)
      }).catch(err => console.log(err))
    }
  },

  getTeamPitcherStats: (req, res) => {
    let statType = req.params.statsType

    if(req.params.sort === 'desc') {
      TeamPitcherStats.findAll({
        where: {
          year: req.params.year,
          season: 'full',
        },
        order: [[statType, 'DESC']]
      }).then((result) => {
        res.json(result)
      }).catch(err => console.log(err))
    } else {
      TeamPitcherStats.findAll({
        where: {
          year: req.params.year,
          season: 'full',
        },
        order: [[statType, 'ASC']]
      }).then((result) => {
        res.json(result)
      }).catch(err => console.log(err))
    }
  }
}

module.exports = apisController