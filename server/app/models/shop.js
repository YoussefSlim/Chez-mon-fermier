const client = require('../database');

const shop = {
    
    getAllShops: async (callback) => {
        // 1. we writes the request
        const sql = await client.query(`SELECT * FROM shop`);
        return sql.rows;
    },

    getShopById: async (shopId) => {
        
        const shop = await client.query('SELECT * FROM shop WHERE id = $1', [shopId]);
        return shop.rows[0];
    },

    getShopByDepartment: async (dptNbr) => {
        const sql =  await client.query(`
        SELECT * FROM "shop" WHERE "department_number" = $1`, [dptNbr]);
        return sql.rows;      
    },
       
    getShopByCreatedDate: async (createdAt) => {
        const sql =  await client.query(`SELECT * FROM "shop" ORDER BY "id" DESC LIMIT 4;`, (createdAt));
        return sql.rows;
    }
};

module.exports = shop;