const client = require("../database");
const tableName = "Category";

class Category {
  constructor(data = {}) {
    //super(data);
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }

  static async findAllCategories(callback) {
    // 1. we writes the request
    const sql = await client.query(`SELECT * FROM category`);
    return sql.rows;
  }

  static async findOneCategory(categoryId) {
    const sql = await client.query(
      `SELECT * FROM "category" WHERE "id" = $1;`,
      [categoryId]
    );
    return sql.rows[0];
  }

  static async findCategoryByParentId(parentId) {
    const sql = await client.query(
      `
          SELECT * 
          FROM "category" 
          WHERE category.parent_id = $1;
      `,
      [parentId]
    );
    return sql.rows[0];
  }

  static async saveCategory(category) {
    let insertedCategory;

    //if (category.id) {
    insertedCategory = await client.query(
      `
          INSERT INTO category (name, description, parent_id, image)
          VALUES ($1, $2, $3, $4)
          RETURNING id;`,
      [category.name, category.description, category.parent_id, category.image]
    );
    return insertedCategory.rows[0];
  }

  static async updateCategory(data) {
    // we decomposed the SQL requeste with the informations we want to insert
    const sql = `UPDATE category SET "name" = $1, "description" = $2, "parent_id" = $3, "image" = $4, "updated_at" = now() WHERE "id" = $5 RETURNING "id", "name", "description", "parent_id", "image";`;
    // we will connect to the db with us category, and we stock the complete request in the data for the return
    const dataUpdate = await client.query(sql, [
      data.name,
      data.description,
      data.parent_id,
      data.image,
      data.id,
    ]);
    //dataUpdate.rows[0].message = 'Le produit est bien modifié';
    // We send the new datas
    return dataUpdate.rows[0];
  }

  static async deleteCategory(id) {
    const categoryToDelete = await client.query(
      `
      DELETE FROM category WHERE id=$1;`,
      [id]
    );
    return categoryToDelete.rows[0];
  }
}

module.exports = Category;
