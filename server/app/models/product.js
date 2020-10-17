const Sequelize = require('sequelize');
const sequelize = require('../database');

class Product extends Sequelize.Model {};

// Sequelize's initialization

Product.init({
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  price_ht: Sequelize.INTEGER,
  price_ttc: Sequelize.INTEGER,
  url: Sequelize.STRING,
  shop_id: Sequelize.INTEGER,
  category_id: Sequelize.INTEGER
},{
  sequelize,
  tableName: "product"
});

module.exports = Product;