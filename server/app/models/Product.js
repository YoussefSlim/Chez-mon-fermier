const client = require('../database');
//const CoreModel = require ('../models/CoreModel');
const tableName = 'product';

class Product {
    //static tableName = 'product';

    constructor(data = {}) {
        //super(data);
        for (const prop in data) {
            this[prop] = data[prop];
        }
      }

    static async findAll(callback)  {
        // 1. we writes the request
        const sql = await client.query(`SELECT * FROM "product"`);
        return sql.rows;
    }

    static async findOne(productId)  {
        
        const product = await client.query(`SELECT * FROM "product" WHERE "id" = $1`, [productId]);
        return product.rows[0];
    }

     static async findByCategory(categoryId)  {
        const sql =  await client.query(`
          SELECT * 
          FROM "product" 
          WHERE category_id = $1`, [categoryId]);
         return sql.rows;
    }
       
    static async findByCreatedDate(createdAt) {
      try{  
      const sql =  await client.query(`SELECT * FROM product ORDER BY create_at > now() LIMIT 4;`, [createdAt]);
        return sql.rows;
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    }

    static async findByShop(shopId) {
        const sql =  await client.query(`
          SELECT * 
          FROM "product" 
          WHERE shop_id = $1`, [shopId]);
        return sql.rows;
    }

    static async saveProduct(product) {

        let insertedProduct;

        //if (product.id) {
            insertedProduct = await client.query (`
          INSERT INTO product (title, description, quantity, price_ht, price_ttc, url, shop_id, category_id)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING id;`, [
            product.title,
            product.description,
            product.quantity,
            product.price_ht,
            product.price_ttc,
            product.url,
            product.shop_id,
            product.category_id           
          ]);
     return insertedProduct.rows[0];
    }

      static async updateProduct(data){
           // we decomposed the SQL requeste with the informations we want to insert 
           const sql = `UPDATE product SET "title" = $1, "description" = $2, "quantity" = $3, "price_ht" = $4, "price_ttc" = $5, "url" = $6, "shop_id" = $7, "category_id" = $8, "updated_at" = now() WHERE "id" = $9 RETURNING "id", "title", "description", "quantity", "price_ht", "price_ttc", "url", "shop_id", "category_id";`;
           // we will connect to the db with us product, and we stock the complete request in the data for the return 
           const dataUpdate = await client.query(sql, [data.title, data.description, data.quantity, data.price_ht, data.price_ttc, data.url, data.shop_id, data.category_id, data.id]);
           //dataUpdate.rows[0].message = 'Le produit est bien modifié';
           // We send the new datas 
           return dataUpdate.rows[0];
        
      }

    static async deleteProduct (id) {
      const productToDelete = await client.query (`
      DELETE FROM product WHERE id=$1;
      `, [id]);
      return productToDelete.rows[0];

    }
};

module.exports = Product;