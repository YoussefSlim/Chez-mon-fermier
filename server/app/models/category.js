const client = require('../database');

const category = {
    
    getAllCategories: async (callback) => {
        // 1. we writes the request
        const sql = await client.query(`SELECT * FROM category`);
        return sql.rows;
    },

    getCategoryById: async (callback) => {
        const sql = await client.query(`SELECT * FROM "category" WHERE "id" = ${1};`);
       return sql.rows;
    },

    getCategoryByParentId: async (callback) => {
        const sql =  await client.query(`
          SELECT * 
          FROM "category" 
          WHERE category.parent_id = ${1};
      `);
      return sql.rows;
    }
};

module.exports = category;