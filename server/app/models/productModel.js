const client = require('../database');

const productModel = {
    
    getAllProducts: (callback) => {
        // 1. we writes the request
        const sql = `SELECT * FROM product`;

        // 2. we execute the requête
        client.query(sql, (err, data) => {
            // 3. We get the result of the request, and we pass it to the callback
            if (err) {
                console.log(err);
            } else {
                callback(data.rows);
            }
        });
    },

    getProductById: (id, callback) => {
        const query = `SELECT * FROM "product" WHERE "id" = $1;`;
        client.query(query, [ id ], (error, result) => {
            callback(error, result);
        });
    },
    getProductsByCategory: (category, callback) => {
      const queryText = `
          SELECT * 
          FROM "product" 
          JOIN product_has_category 
              ON product.id = product_has_category.product_id
          JOIN category
              ON product_has_category.category_id = category.id
          WHERE category.id = $1
          ;
      `;
      db.query(queryText, [category], (error, result) => {
          callback(error, result);
      });
    },
    getProductByCreatedDate: (created_at, callback) => {
      const query = `SELECT * FROM "product" ORDER BY "created_at" DESC;`;
      client.query(query, [created_at], (error, result) => {
          callback(error, result);
      });
    }
};

module.exports = productModel;