const client = require('../database');
//const CoreModel = require ('../models/CoreModel');
const tableName = 'customer';

class Customer {

    //static tableName = 'customer';

    constructor(data = {}) {
     // super(data);
      for (const prop in data) {
          this[prop] = data[prop];
      }
    }

    static async getAllCustomers () {
        // 1. we writes the request
        const customers = await client.query(`SELECT * FROM customer`);
        return customers.rows;
    }

    static async getCustomerById (customerId) {
        
        const customer = await client.query('SELECT * FROM customer WHERE id = $1', [customerId]);
        return customer.rows;
    }

    static async getCustomerByEmail (email) {
        
      const customer = await client.query ('SELECT * FROM customer WHERE email=$1', [email]);
        return customer.rows[0];
    }
// A corriger car non fonctionnelle
    // async updateCustomer(id){
    //   const customer = await client.query (`UPDATE "customer" SET $1 = $1 WHERE id=$1`, [id]);
    //     return customer.rows[0]
    // }
  

        static async saveCustomer (customer) {

        let insertedCustomer;

        //if (customer.id) {
          insertedCustomer = await client.query (`
          INSERT INTO customer (first_name, last_name, address, additional_address, postcode, department, city, phone_number, email, password)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING id;`, [
            customer.first_name,
            customer.last_name,
            customer.address,
            customer.additional_address,
            customer.postcode,
            customer.department,
            customer.city,
            customer.phone_number,
            customer.email,
            customer.password           
          ]);        
          return insertedCustomer.rows[0];      
    }
    static async updateCustomer(data){
      // we decomposed the SQL requeste with the informations we want to insert 
      const sql = `UPDATE customer SET "first_name" = $1, "last_name" = $2, "address" = $3, "additional_address" = $4,"postcode" = $5, "department" =$6, "city" = $7,  "phone_number" = $8, "email" = $9, "password" = $10, "updated_at" = now() WHERE "id" = $11 RETURNING "id", "first_name", "last_name", "address", "additional_address", "postcode", "department", "city", "phone_number", "email", "password";`;
      // we will connect to the db with us customer, and we stock the complete request in the data for the return 
      const dataUpdate = await client.query(sql, [data.first_name, data.last_name, data.address, data.additional_address, data.postcode, data.department, data.city, data.phone_number, data.email, data.password, data.id]);
      //dataUpdate.rows[0].message = 'Le produit est bien modifié';
      // We send the new datas 
      return dataUpdate.rows[0];
 }

    async deleteCustomer (id) {
      await client.query (`
      DELETE FROM customer WHERE id=$1;`, [id]);
      //return customerToDelete.rows[0];
    }
   }

module.exports = Customer;