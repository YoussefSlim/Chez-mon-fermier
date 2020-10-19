const client = require('../database');


const Category = {
    
  getAllCategories: (callback) => {
      // 1. we writes the request
      const sql = `SELECT * FROM category`;

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
}

module.exports = Category;