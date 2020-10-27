const client = require('../database');
// const CoreModel = require ('./CoreModel');

class Shop {

    constructor (data) {
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

    static async saveShop (shop) {

        let insertedShop;

        //if (shop.categoryId) {
          insertedShop = await client.query (`
          INSERT INTO shop (name, address, additional_address, postcode, city, phone_number, email, password, logo, siret, tva, delivery_method, department_number)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
          RETURNING id;`, [
            shop.name,
            shop.address,
            shop.additional_address,
            shop.postcode,
            shop.city,
            shop.phone_number,
            shop.email,
            shop.password,
            shop.logo,
            shop.siret,
            shop.tva,
            shop.delivery_methgod,
            shop.department_number            
          ]);
      
          return insertedShop.rows[0];      

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