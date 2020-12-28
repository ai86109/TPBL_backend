'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BatterStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER,
        unique: 'batter'
      },
      zhtwTeam: {
        type: Sequelize.CHAR,
        unique: 'batter'
      },
      enTeam: {
        type: Sequelize.CHAR
      },
      playerNumber: {
        type: Sequelize.INTEGER,
        unique: 'batter'
      },
      zhtwPlayerName: {
        type: Sequelize.CHAR,
        unique: 'batter'
      },
      enPlayerName: {
        type: Sequelize.CHAR
      },
      image: {
        type: Sequelize.CHAR
      },
      position: {
        type: Sequelize.CHAR
      },
      games: {
        type: Sequelize.INTEGER
      },
      pa: {
        type: Sequelize.INTEGER
      },
      ab: {
        type: Sequelize.INTEGER
      },
      rbi: {
        type: Sequelize.INTEGER
      },
      r: {
        type: Sequelize.INTEGER
      },
      h: {
        type: Sequelize.INTEGER
      },
      "1B": {
        type: Sequelize.INTEGER
      },
      "2B": {
        type: Sequelize.INTEGER
      },
      "3B": {
        type: Sequelize.INTEGER
      },
      hr: {
        type: Sequelize.INTEGER
      },
      tb: {
        type: Sequelize.INTEGER
      },
      so: {
        type: Sequelize.INTEGER
      },
      sb: {
        type: Sequelize.INTEGER
      },
      obp: {
        type: Sequelize.CHAR
      },
      slg: {
        type: Sequelize.CHAR
      },
      avg: {
        type: Sequelize.CHAR
      },
      gidp: {
        type: Sequelize.INTEGER
      },
      sac: {
        type: Sequelize.INTEGER
      },
      sf: {
        type: Sequelize.INTEGER
      },
      bb: {
        type: Sequelize.INTEGER
      },
      ibb: {
        type: Sequelize.INTEGER
      },
      hbp: {
        type: Sequelize.INTEGER
      },
      cs: {
        type: Sequelize.INTEGER
      },
      go: {
        type: Sequelize.INTEGER
      },
      ao: {
        type: Sequelize.INTEGER
      },
      goao: {
        type: Sequelize.CHAR
      },
      ta: {
        type: Sequelize.CHAR
      },
      ssa: {
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
    await queryInterface.dropTable('BatterStats');
  }
};