const client = require('../database');

const productModel = {
    
    getAllProducts: async (callback) => {
        // 1. we writes the request
        const sql = await client.query(`SELECT * FROM product`);
        return sql.rows;
    },

    getProductById: async (callback) => {
        const sql = await client.query(`SELECT * FROM "product" WHERE "id" = ${1};`);
       return sql.rows;
    },

    getProductsByCategory: async (callback) => {
        const sql =  await client.query(`
          SELECT * 
          FROM "product" 
          WHERE category_id = ${1}
          ;
      `);
      return sql.rows;
    },
       
    getProductByCreatedDate: async (callback) => {
        const sql =  await client.query(`SELECT * FROM "product" ORDER BY "id" DESC;`);
        return sql.rows;
    },

    getProductsByShop: async (callback) => {
        const sql =  await client.query(`
          SELECT * 
          FROM "product" 
          WHERE "shop_id" = ${1}
          ;
      `);
      return sql.rows;
    }
};

module.exports = productModel;