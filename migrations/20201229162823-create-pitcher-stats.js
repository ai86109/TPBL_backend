'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PitcherStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER,
        unique: 'pitcher'
      },
      zhtwTeam: {
        type: Sequelize.CHAR,
        unique: 'pitcher'
      },
      enTeam: {
        type: Sequelize.CHAR
      },
      playerNumber: {
        type: Sequelize.INTEGER,
        unique: 'pitcher'
      },
      zhtwPlayerName: {
        type: Sequelize.CHAR,
        unique: 'pitcher'
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
      gs: {
        type: Sequelize.INTEGER
      },
      gr: {
        type: Sequelize.INTEGER
      },
      cg: {
        type: Sequelize.INTEGER
      },
      sho: {
        type: Sequelize.INTEGER
      },
      nbb: {
        type: Sequelize.INTEGER
      },
      win: {
        type: Sequelize.INTEGER
      },
      lose: {
        type: Sequelize.INTEGER
      },
      sv: {
        type: Sequelize.INTEGER
      },
      bs: {
        type: Sequelize.INTEGER
      },
      hld: {
        type: Sequelize.INTEGER
      },
      ip: {
        type: Sequelize.DECIMAL(5,1)
      },
      whip: {
        type: Sequelize.DECIMAL(4,2)
      },
      era: {
        type: Sequelize.DECIMAL(6,2)
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
      ibb: {
        type: Sequelize.INTEGER
      },
      hbp: {
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
      go: {
        type: Sequelize.INTEGER
      },
      ao: {
        type: Sequelize.INTEGER
      },
      goao: {
        type: Sequelize.DECIMAL(5,3)
      },
      pip: {
        type: Sequelize.DECIMAL(4,2)
      },
      so9: {
        type: Sequelize.DECIMAL(4,2)
      },
      bb9: {
        type: Sequelize.DECIMAL(4,2)
      },
      sobb: {
        type: Sequelize.DECIMAL(4,2)
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
    await queryInterface.dropTable('PitcherStats');
  }
};