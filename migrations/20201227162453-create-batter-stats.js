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
        type: Sequelize.DECIMAL(4,3)
      },
      slg: {
        type: Sequelize.DECIMAL(4,3)
      },
      avg: {
        type: Sequelize.DECIMAL(4,3)
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
        type: Sequelize.DECIMAL(4,3)
      },
      ta: {
        type: Sequelize.DECIMAL(4,3)
      },
      ssa: {
        type: Sequelize.DECIMAL(5,2)
      },
      ops: {
        type: Sequelize.DECIMAL(4,3)
      },
      xbh: {
        type: Sequelize.INTEGER
      },
      babip: {
        type: Sequelize.DECIMAL(4,3)
      },
      iso: {
        type: Sequelize.DECIMAL(4,3)
      },
      abhr: {
        type: Sequelize.DECIMAL(5,2)
      },
      bbso: {
        type: Sequelize.DECIMAL(4,3)
      },
      bbpa: {
        type: Sequelize.DECIMAL(4,3)
      },
      sopa: {
        type: Sequelize.DECIMAL(4,3)
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