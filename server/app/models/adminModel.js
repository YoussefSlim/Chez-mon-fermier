const client = require('../database');


const adminModel = {
    
  updateCustomer(data){
    for(const prop in data){
        this[prop] = data[prop];
    }
  },

  saveCustomer: async () => {
    if (this.id) {
      const editedCustomer = await db.query (`
      UPDATE traveler SET
      first_name = $1, last_name = $2, adress = $3, additional_adress =$4, postcode = $5, city =$6, phone_number =$7, email =$8, password= $9
      WHERE id = $10`, [
        this.first_name,
        this.last_name,
        this.adress,
        this.additional_adress,
        this.postcode,
        this.city,
        this.phone_number,
        this.email,
        this.password,
        this.id            
      ]);
  } else {
      const insertedCustomer = await db.query (`
      INSERT INTO customer (first_name, last_name, adress, additional_adress, postcode, city, phone_number, email, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id;
      `, [
          this.first_name,
          this.last_name,
          this.adress,
          this.additional_adress,
          this.postcode,
          this.city,
          this.phone_number,
          this.email,
          this.password            
      ]);
  }
  },
  deleteCustomer: async () => {
    const customerToDelete = await db.query (`
    DELETE FROM customer WHERE id=$1;
    `, [
        this.id
    ]);
  }
}

module.exports = Admin;