'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeamPitcherStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TeamPitcherStats.init({
    year: {
      type: DataTypes.INTEGER,
      unique: 'teamPitcher'
    },
    season: {
      type: DataTypes.CHAR,
      unique: 'teamPitcher'
    },
    zhtwTeam: {
      type: DataTypes.CHAR,
      unique: 'teamPitcher'
    },
    enTeam: DataTypes.CHAR,
    games: DataTypes.INTEGER,
    bf: DataTypes.INTEGER,
    np: DataTypes.INTEGER,
    h: DataTypes.INTEGER,
    hr: DataTypes.INTEGER,
    bb: DataTypes.INTEGER,
    so: DataTypes.INTEGER,
    wp: DataTypes.INTEGER,
    bk: DataTypes.INTEGER,
    r: DataTypes.INTEGER,
    er: DataTypes.INTEGER,
    whip: DataTypes.DECIMAL(5,2),
    era: DataTypes.DECIMAL(5,2),
    sobb: DataTypes.DECIMAL(4,2),
    win: DataTypes.INTEGER,
    lose: DataTypes.INTEGER,
    tied: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TeamPitcherStats',
  });
  return TeamPitcherStats;
};