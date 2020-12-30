'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TeamPitcherStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER,
        unique: 'teamPitcher'
      },
      season: {
        type: Sequelize.CHAR,
        unique: 'teamPitcher'
      },
      zhtwTeam: {
        type: Sequelize.CHAR,
        unique: 'teamPitcher'
      },
      enTeam: {
        type: Sequelize.CHAR
      },
      games: {
        type: Sequelize.INTEGER
      },
      bf: {
        type: Sequelize.INTEGER
      },
      np: {
        type: Sequelize.INTEGER
      },
      h: {
        type: Sequelize.INTEGER
      },
      hr: {
        type: Sequelize.INTEGER
      },
      bb: {
        type: Sequelize.INTEGER
      },
      so: {
        type: Sequelize.INTEGER
      },
      wp: {
        type: Sequelize.INTEGER
      },
      bk: {
        type: Sequelize.INTEGER
      },
      r: {
        type: Sequelize.INTEGER
      },
      er: {
        type: Sequelize.INTEGER
      },
      whip: {
        type: Sequelize.DECIMAL(5,2)
      },
      era: {
        type: Sequelize.DECIMAL(5,2)
      },
      sobb: {
        type: Sequelize.DECIMAL(4,2)
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
    await queryInterface.dropTable('TeamPitcherStats');
  }
};