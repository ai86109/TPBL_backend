'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Standings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      zhtwTeam: {
        type: Sequelize.CHAR,
        unique: 'teamYearSeason'
      },
      year: {
        type: Sequelize.INTEGER,
        unique: 'teamYearSeason'
      },
      season: {
        type: Sequelize.STRING,
        unique: 'teamYearSeason'
      },
      enTeam: {
        type: Sequelize.CHAR
      },
      teamRank: {
        type: Sequelize.INTEGER
      },
      games: {
        type: Sequelize.INTEGER
      },
      win: {
        type: Sequelize.INTEGER
      },
      lose: {
        type: Sequelize.INTEGER
      },
      tied: {
        type: Sequelize.INTEGER
      },
      pct: {
        type: Sequelize.CHAR
      },
      gb: {
        type: Sequelize.CHAR
      },
      eIndex: {
        type: Sequelize.CHAR
      },
      vsBrothers: {
        type: Sequelize.CHAR
      },
      vsMonkeys: {
        type: Sequelize.CHAR
      },
      vsLions: {
        type: Sequelize.CHAR
      },
      vsGuardians: {
        type: Sequelize.CHAR
      },
      home: {
        type: Sequelize.CHAR
      },
      away: {
        type: Sequelize.CHAR
      },
      strk: {
        type: Sequelize.CHAR
      },
      l10: {
        type: Sequelize.CHAR
      },
      rs: {
        type: Sequelize.INTEGER
      },
      ra: {
        type: Sequelize.INTEGER
      },
      oneRun: {
        type: Sequelize.CHAR
      },
      xtra: {
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
    await queryInterface.dropTable('Standings');
  }
};