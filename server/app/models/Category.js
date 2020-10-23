const client = require('../database');
const tableName= 'Category';

class Category {

    constructor(data = {}) {
        //super(data);
        for (const prop in data) {
            this[prop] = data[prop];
        }
      }
    
    static async findAllCategories (callback) {
        // 1. we writes the request
        const sql = await client.query(`SELECT * FROM category`);
        return sql.rows;
    }

    static async findOneCategory (categoryId) {
        const sql = await client.query(`SELECT * FROM "category" WHERE "id" = $1;`, [categoryId]);
       return sql.rows[0];
    }

    static async findCategoryByParentId (parentId) {
        const sql =  await client.query(`
          SELECT * 
          FROM "category" 
          WHERE category.parent_id = $1;
      `, [parentId]);
      return sql.rows[0];
    }

    static async saveCategory(category) {

        let insertedCategory;

        //if (category.id) {
            insertedCategory = await client.query (`
          INSERT INTO category (name, description, parent_id, image)
          VALUES ($1, $2, $3, $4)
          RETURNING id;`, [
            category.name,
            category.description,
            category.parent_id,
            category.image           
          ]);
     return insertedCategory.rows[0];
    }
};

module.exports = Category;