'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Games.init({
    date: DataTypes.DATEONLY,
    week: DataTypes.INTEGER,
    hometeam: DataTypes.CHAR,
    visitingteam: DataTypes.CHAR,
    hometeamstandings: DataTypes.CHAR,
    visitingteamstandings: DataTypes.CHAR,
    hometeamscoreboard: DataTypes.CHAR,
    visitingteamscoreboard: DataTypes.CHAR,
    hometeambatterboard: DataTypes.CHAR,
    visitingteambatterboard: DataTypes.CHAR,
    hometeampitcherboard: DataTypes.CHAR,
    visitingteampitcherboard: DataTypes.CHAR,
    status: DataTypes.CHAR,
    gamenum: DataTypes.INTEGER,
    stadium: DataTypes.CHAR,
    win: DataTypes.CHAR,
    lose: DataTypes.CHAR,
    save: DataTypes.CHAR,
    hometeambatternote: DataTypes.CHAR,
    visitingteambatternote: DataTypes.CHAR,
    hometeampitchernote: DataTypes.CHAR,
    visitingteampitchernote: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};