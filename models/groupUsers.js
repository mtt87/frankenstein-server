'use strict';

var Sequelize = require('sequelize');

module.exports = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  groupId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  index: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  }
};
