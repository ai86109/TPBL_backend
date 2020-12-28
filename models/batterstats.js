'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BatterStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BatterStats.init({
    year: {
      type: DataTypes.INTEGER,
      unique: 'batter'
    },
    zhtwTeam: {
      type: DataTypes.CHAR,
      unique: 'batter'
    },
    enTeam: DataTypes.CHAR,
    playerNumber: {
      type: DataTypes.INTEGER,
      unique: 'batter'
    },
    zhtwPlayerName: {
      type: DataTypes.CHAR,
      unique: 'batter'
    },
    enPlayerName: DataTypes.CHAR,
    image: DataTypes.CHAR,
    position: DataTypes.CHAR,
    games: DataTypes.INTEGER,
    pa: DataTypes.INTEGER,
    ab: DataTypes.INTEGER,
    rbi: DataTypes.INTEGER,
    r: DataTypes.INTEGER,
    h: DataTypes.INTEGER,
    "1B": DataTypes.INTEGER,
    "2B": DataTypes.INTEGER,
    "3B": DataTypes.INTEGER,
    hr: DataTypes.INTEGER,
    tb: DataTypes.INTEGER,
    so: DataTypes.INTEGER,
    sb: DataTypes.INTEGER,
    obp: DataTypes.CHAR,
    slg: DataTypes.CHAR,
    avg: DataTypes.CHAR,
    gidp: DataTypes.INTEGER,
    sac: DataTypes.INTEGER,
    sf: DataTypes.INTEGER,
    bb: DataTypes.INTEGER,
    ibb: DataTypes.INTEGER,
    hbp: DataTypes.INTEGER,
    cs: DataTypes.INTEGER,
    go: DataTypes.INTEGER,
    ao: DataTypes.INTEGER,
    goao: DataTypes.CHAR,
    ta: DataTypes.CHAR,
    ssa: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'BatterStats',
  });
  return BatterStats;
};