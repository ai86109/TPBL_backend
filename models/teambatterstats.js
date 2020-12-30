'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeamBatterStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TeamBatterStats.init({
    year: {
      type: DataTypes.INTEGER,
      unique: 'teamBatter'
    },
    season: {
      type: DataTypes.CHAR,
      unique: 'teamBatter'
    },
    zhtwTeam: {
      type: DataTypes.CHAR,
      unique: 'teamBatter'
    },
    enTeam: DataTypes.CHAR,
    games: DataTypes.INTEGER,
    ab: DataTypes.INTEGER,
    r: DataTypes.INTEGER,
    rbi: DataTypes.INTEGER,
    h: DataTypes.INTEGER,
    hr: DataTypes.INTEGER,
    tb: DataTypes.INTEGER,
    so: DataTypes.INTEGER,
    bb: DataTypes.INTEGER,
    sb: DataTypes.INTEGER,
    obp: DataTypes.DECIMAL(4,3),
    slg: DataTypes.DECIMAL(4,3),
    avg: DataTypes.DECIMAL(4,3),
    ops: DataTypes.DECIMAL(4,3),
    abhr: DataTypes.DECIMAL(5,2)
  }, {
    sequelize,
    modelName: 'TeamBatterStats',
  });
  return TeamBatterStats;
};