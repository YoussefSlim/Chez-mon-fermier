const client = require('./database');

const dataMapper = {
    
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
}//,
// getTypes: (callback) => {
//     // on execute qui prend un certain temps
//     // quand query a fini il va executer la fonction qu'on lui donne en 2ème argument, on peut très bien lui passer la défintion de callback directement
//     // db.query('SELECT * FROM "types";', callback);
//     db.query('SELECT * FROM "type";', (error, result) => {
//         callback(error, result);
//     });
// }
};

module.exports = dataMapper;