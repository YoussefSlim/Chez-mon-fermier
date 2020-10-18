const Sequelize = require('sequelize');
const sequelize = require('../database');

class Admin extends Sequelize.Model {};

// Sequelize's initialization

Admin.init({
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
},{
  sequelize,
  tableName: "admin"
});

module.exports = Admin;