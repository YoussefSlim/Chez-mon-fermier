const client = require('../database');

const productModel = {
    
    getAllProducts: async (callback) => {
        // 1. we writes the request
        const sql = await client.query(`SELECT * FROM product`);
        return sql.rows;
    },

    getProductById: async (productId) => {
        
        const product = await client.query('SELECT * FROM product WHERE id = $1', [productId]);
        return product.rows[0];
    },

    getProductsByCategory: async (categoryId) => {
        const sql =  await client.query(`
          SELECT * 
          FROM "product" 
          WHERE category_id = $1`, [categoryId]);
         return sql.rows;
    },
       
    getProductByCreatedDate: async (createdAt) => {
        const sql =  await client.query(`SELECT * FROM "product" ORDER BY "created_at" DESC;`, [createdAt]);
        return sql.rows;
    },

    getProductsByShop: async (shopId) => {
        const sql =  await client.query(`
          SELECT * 
          FROM "product" 
          WHERE shop_id = $1`, [shopId]);
        return sql.rows;
    }
};

module.exports = productModel;