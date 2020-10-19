const client = require('../database');


class Customer extends Sequelize.Model {};

// Sequelize's initialization

Customer.init({
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  adress: Sequelize.STRING,
  additional_address: Sequelize.STRING,
  postcode: Sequelize.STRING,
  city: Sequelize.STRING,
  phone_number: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
},{
  sequelize,
  tableName: "customer"
});

module.exports = Customer;