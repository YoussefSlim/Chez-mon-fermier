const Sequelize = require('sequelize');
const sequelize = require('../database');

class Shop extends Sequelize.Model {};

// Sequelize's initialization

Shop.init({
  name: Sequelize.STRING,
  adress: Sequelize.STRING,
  additional_address: Sequelize.STRING,
  postcode: Sequelize.STRING,
  city: Sequelize.STRING,
  phone_number: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  logo: Sequelize.STRING,
  siret: Sequelize.STRING,
  tva: Sequelize.STRING,
  delivery_method: Sequelize.delivery
},{
  sequelize,
  tableName: "shop"
});

module.exports = Shop;