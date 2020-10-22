const client = require('../database');
const CoreModel = require ('./CoreModel');

class Customer extends CoreModel {

    //static tableName = 'customer';

    constructor (data) {
      super(data);
      for (const prop in data){
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
        return customer.rows[0];
    }

    static async getCustomerByEmail (email) {
        
      const customer = await client.query('SELECT * FROM customer WHERE customer = $1', [email]);
      return customer.rows[0];
    }

    // updateCustomer(data){
    //   for(const prop in data){
    //       this[prop] = data[prop];
    //   }
    // },
  
    static async saveCustomer () {

        let insertedCustomer;

        //if (this.categoryId) {
          insertedCustomer = await db.query (`
          INSERT INTO customer (first_name, last_name, adress, additional_adress, postcode, department, city, phone_number, email, password)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          RETURNING id;`, [
            this.first_name,
            this.last_name,
            this.adress,
            this.additional_adress,
            this.postcode,
            this.department,
            this.city,
            this.phone_number,
            this.email,
            this.password,
            this.categoryId            
          ]);
      // } else {
      //     insertedCustomer = await db.query (`
      //     INSERT INTO customer (first_name, last_name, adress, additional_adress, postcode, department, city, phone_number, email, password)
      //     SELECT $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
      //     FROM category
      //             WHERE label = $11
      //             RETURNING customer.id;
      //     `, [
      //         this.first_name,
      //         this.last_name,
      //         this.adress,
      //         this.additional_adress,
      //         this.postcode,
      //         this.department,
      //         this.city,
      //         this.phone_number,
      //         this.email,
      //         this.password            
      //     ]);
      // }
        // on va se baser sur rowCount pour savoir si l'insertion a bien eu lieu
        if (insertedCustomer.rowCount) {
          this.id = insertedCustomer.rows[0].id;
      }
    }

    static async deleteCustomer () {
      const customerToDelete = await db.query (`
      DELETE FROM customer WHERE id=$1;
      `, [
          id
      ]);
      return customerToDelete.rows[0];

    }
  }

module.exports = Customer;