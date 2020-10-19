const client = require('../database');

const shop = {
    
    getAllShops: async (callback) => {
        // 1. we writes the request
        const sql = await client.query(`SELECT * FROM shop`);
        return sql.rows;
    },

    getShopById: async (callback) => {
        const sql = await client.query(`SELECT * FROM "shop" WHERE "id" = ${1};`);
       return sql.rows;
    },

    getShopByDepartment: async (callback) => {
        const sql =  await client.query(`
        SELECT * FROM "shop" WHERE "department_number" = ${1};
      `);
      return sql.rows;
    },
       
    getShopByCreatedDate: async (callback) => {
        const sql =  await client.query(`SELECT * FROM "shop" ORDER BY "id" DESC LIMIT 4;`);
        return sql.rows;
    },
};

module.exports = shop;