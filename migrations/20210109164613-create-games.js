'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY
      },
      week: {
        type: Sequelize.INTEGER
      },
      hometeam: {
        type: Sequelize.CHAR
      },
      visitingteam: {
        type: Sequelize.CHAR
      },
      hometeamstandings: {
        type: Sequelize.CHAR
      },
      visitingteamstandings: {
        type: Sequelize.CHAR
      },
      hometeamscoreboard: {
        type: Sequelize.CHAR
      },
      visitingteamscoreboard: {
        type: Sequelize.CHAR
      },
      hometeambatterboard: {
        type: Sequelize.CHAR
      },
      visitingteambatterboard: {
        type: Sequelize.CHAR
      },
      hometeampitcherboard: {
        type: Sequelize.CHAR
      },
      visitingteampitcherboard: {
        type: Sequelize.CHAR
      },
      status: {
        type: Sequelize.CHAR
      },
      gamenum: {
        type: Sequelize.INTEGER
      },
      stadium: {
        type: Sequelize.CHAR
      },
      win: {
        type: Sequelize.CHAR
      },
      lose: {
        type: Sequelize.CHAR
      },
      save: {
        type: Sequelize.CHAR
      },
      hometeambatternote: {
        type: Sequelize.CHAR
      },
      visitingteambatternote: {
        type: Sequelize.CHAR
      },
      hometeampitchernote: {
        type: Sequelize.CHAR
      },
      visitingteampitchernote: {
        type: Sequelize.CHAR
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Games');
  }
};