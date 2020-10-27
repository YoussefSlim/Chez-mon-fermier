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
    static async updateShop(data){
        // we decomposed the SQL requeste with the informations we want to insert 
        const sql = `UPDATE shop SET "name" = $1, "address" = $2, "additional_address" = $3,"postcode" = $4, "city" = $5,  "phone_number" = $6, "email" = $7, "password" = $8,  "siret" = $9, "tva" = $10, "delivery_method" = $11, "department_number" =$12, "updated_at" = now() WHERE "id" = $13 RETURNING "id", "name", "address", "additional_address", "postcode", "city", "phone_number", "email", "logo", "siret", "tva", "delivery_method", "department_number";`;
        // we will connect to the db with us shop, and we stock the complete request in the data for the return 
        const dataUpdate = await client.query(sql, [data.name, data.address, data.additional_address, data.postcode, data.city, data.phone_number, data.email, data.logo, data.siret, data.tva, data.delivery_method, data.department_number, data.id]);
        //dataUpdate.rows[0].message = 'Le produit est bien modifié';
        // We send the new datas 
        return dataUpdate.rows[0];
   }

    static async deleteShop () {
      const shopToDelete = await client.query (`
      DELETE FROM shop WHERE id=$1;
      `, [
          id
      ]);
      return shopToDelete.rows[0];

    }
};

module.exports = Shop;