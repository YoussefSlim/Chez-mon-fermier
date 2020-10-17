const Sequelize = require('sequelize');
const sequelize = require('../database');

class Category extends Sequelize.Model {};

// Sequelize's initialization

Category.init({
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  image: Sequelize.STRING,
  parent_id: Sequelize.INTEGER
},{
  sequelize,
  tableName: "category"
});

module.exports = Category;