const Sequelize = require('sequelize');
const sequelize = require('../database');

class Order extends Sequelize.Model {};

// Sequelize's initialization

Order.init({
  order_number: Sequelize.INTEGER,
  amount: Sequelize.INTEGER,
  customer_id: Sequelize.INTEGER
},{
  sequelize,
  tableName: "order"
});

module.exports = Order;