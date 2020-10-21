const client = require('../database');
const CoreModel = require ('./CoreModel');

class Shop extends CoreModel {

    constructor (data) {
        super(data);
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    static async findAllShops () {
        // 1. we writes the request
        const sql = await client.query(`SELECT * FROM shop`);
        return sql.rows;
    }

    static async findOneShop (shopId) {
        
        const shop = await client.query('SELECT * FROM shop WHERE id = $1', [shopId]);
        return shop.rows[0];
    }

    static async findShopByDepartment (dptNbr) {
        const sql =  await client.query(`
        SELECT * FROM "shop" WHERE "department_number" = $1`, [dptNbr]);
        return sql.rows;      
    }
       
    static async findShopByCreatedDate  (shopId) {
        const sql =  await client.query(`SELECT * FROM shop ORDER BY id DESC;`, (shopId));
        return sql.rows;
    }

    static async saveShop () {

        let insertedShop;

        //if (this.categoryId) {
          insertedShop = await db.query (`
          INSERT INTO shop (name, adress, additional_adress, postcode, city, phone_number, email, password, logo, siret, tva, delivery_method, department_number)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
          RETURNING id;`, [
            this.name,
            this.adress,
            this.additional_adress,
            this.postcode,
            this.city,
            this.phone_number,
            this.email,
            this.password,
            this.logo,
            this.siret,
            this.tva,
            this.delivery_methgod,
            this.department_number            
          ]);
      
        // on va se baser sur rowCount pour savoir si l'insertion a bien eu lieu
        if (insertedShop.rowCount) {
          this.id = insertedShop.rows[0].id;
      }
    }

    static async deleteShop () {
      const shopToDelete = await db.query (`
      DELETE FROM shop WHERE id=$1;
      `, [
          id
      ]);
      return shopToDelete.rows[0];

    }
};

module.exports = Shop;