'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PitcherStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PitcherStats.init({
    year: {
      type: DataTypes.INTEGER,
      unique: 'pitcher'
    },
    zhtwTeam: {
      type: DataTypes.CHAR,
      unique: 'pitcher'
    },
    enTeam: DataTypes.CHAR,
    playerNumber: {
      type: DataTypes.INTEGER,
      unique: 'pitcher'
    },
    zhtwPlayerName: {
      type: DataTypes.CHAR,
      unique: 'pitcher'
    },
    enPlayerName: DataTypes.CHAR,
    image: DataTypes.CHAR,
    position: DataTypes.CHAR,
    games: DataTypes.INTEGER,
    gs: DataTypes.INTEGER,
    gr: DataTypes.INTEGER,
    cg: DataTypes.INTEGER,
    sho: DataTypes.INTEGER,
    nbb: DataTypes.INTEGER,
    win: DataTypes.INTEGER,
    lose: DataTypes.INTEGER,
    sv: DataTypes.INTEGER,
    bs: DataTypes.INTEGER,
    hld: DataTypes.INTEGER,
    ip: DataTypes.DECIMAL(5,1),
    whip: DataTypes.DECIMAL(4,2),
    era: DataTypes.DECIMAL(6,2),
    bf: DataTypes.INTEGER,
    np: DataTypes.INTEGER,
    h: DataTypes.INTEGER,
    hr: DataTypes.INTEGER,
    bb: DataTypes.INTEGER,
    ibb: DataTypes.INTEGER,
    hbp: DataTypes.INTEGER,
    so: DataTypes.INTEGER,
    wp: DataTypes.INTEGER,
    bk: DataTypes.INTEGER,
    r: DataTypes.INTEGER,
    er: DataTypes.INTEGER,
    go: DataTypes.INTEGER,
    ao: DataTypes.INTEGER,
    goao: DataTypes.DECIMAL(5,3),
    pip: DataTypes.DECIMAL(4,2),
    so9: DataTypes.DECIMAL(4,2),
    bb9: DataTypes.DECIMAL(4,2),
    sobb: DataTypes.DECIMAL(4,2)
  }, {
    sequelize,
    modelName: 'PitcherStats',
  });
  return PitcherStats;
};