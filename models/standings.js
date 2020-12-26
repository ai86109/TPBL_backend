'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Standings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Standings.init({
    zhtwTeam: {
      type: DataTypes.CHAR,
      unique: 'teamYearSeason'
    },
    year: {
      type: DataTypes.INTEGER,
      unique: 'teamYearSeason'
    },
    season: {
      type: DataTypes.STRING,
      unique: 'teamYearSeason'
    },
    teamRank: DataTypes.INTEGER,
    enTeam: DataTypes.CHAR,
    games: DataTypes.INTEGER,
    win: DataTypes.INTEGER,
    lose: DataTypes.INTEGER,
    tied: DataTypes.INTEGER,
    pct: DataTypes.INTEGER,
    gb: DataTypes.CHAR,
    eIndex: DataTypes.CHAR,
    vsBrothers: DataTypes.CHAR,
    vsMonkeys: DataTypes.CHAR,
    vsLions: DataTypes.CHAR,
    vsGuardians: DataTypes.CHAR,
    home: DataTypes.CHAR,
    away: DataTypes.CHAR,
    strk: DataTypes.CHAR,
    l10: DataTypes.CHAR,
    rs: DataTypes.INTEGER,
    ra: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Standings',
  });
  return Standings;
};