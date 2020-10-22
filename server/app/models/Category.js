const client = require('../database');

const Category = {
    
    findAllCategories: async (callback) => {
        // 1. we writes the request
        const sql = await client.query(`SELECT * FROM category`);
        return sql.rows;
    },

    findOneCategory: async (categoryId) => {
        const sql = await client.query(`SELECT * FROM "category" WHERE "id" = $1;`, [categoryId]);
       return sql.rows[0];
    },

    findCategoryByParentId: async (parentId) => {
        const sql =  await client.query(`
          SELECT * 
          FROM "category" 
          WHERE category.parent_id = $1;
      `, [parentId]);
      return sql.rows[0];
    }
};

module.exports = Category;