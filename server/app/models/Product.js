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
        const sql =  await client.query(`SELECT * FROM "product" ORDER BY "created_at" DESC;`, [createdAt]);
        return sql.rows;
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

};

module.exports = Product;