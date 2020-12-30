'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TeamBatterStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER,
        unique: 'teamBatter'
      },
      season: {
        type: Sequelize.CHAR,
        unique: 'teamBatter'
      },
      zhtwTeam: {
        type: Sequelize.CHAR,
        unique: 'teamBatter'
      },
      enTeam: {
        type: Sequelize.CHAR
      },
      games: {
        type: Sequelize.INTEGER
      },
      ab: {
        type: Sequelize.INTEGER
      },
      r: {
        type: Sequelize.INTEGER
      },
      rbi: {
        type: Sequelize.INTEGER
      },
      h: {
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
      bb: {
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
      ops: {
        type: Sequelize.DECIMAL(4,3)
      },
      abhr: {
        type: Sequelize.DECIMAL(5,2)
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
    await queryInterface.dropTable('TeamBatterStats');
  }
};