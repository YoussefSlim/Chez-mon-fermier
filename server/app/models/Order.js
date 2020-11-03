const client = require('../database');
//const CoreModel = require ('../models/CoreModel');
const tableName = 'order';

class Order {
    //static tableName = 'order';

    constructor(data = {}) {
        //super(data);
        for (const prop in data) {
            this[prop] = data[prop];
        }
      }

    static async findAllOrders(callback)  {
        // 1. we writes the request
        const sql = await client.query(`SELECT * FROM "order"`);
        return sql.rows;
    }

    static async findOneOrder(orderId)  {
        
        const order = await client.query(`SELECT * FROM "order" WHERE "id" = $1`, [orderId]);
        return order.rows[0];
    }

     static async findOrdersByCustomer(customerId)  {
        const sql =  await client.query(`
        SELECT * FROM "order"
        WHERE customer_id = $1;`, [customerId]);
         return sql.rows;
    }
       
    static async findOrdersByShop(callback) {
      try{  
      const sql =  await client.query(`SELECT * FROM order JOIN customer ON (customer_id= customer.id) UNION (SELECT * from shop JOIN product ON shop_id = shop.id WHERE id=$1;`, [createdAt]);
        return sql.rows;
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    }

    // static async findByShop(shopId) {
    //     const sql =  await client.query(`
    //       SELECT * 
    //       FROM "order" 
    //       WHERE shop_id = $1`, [shopId]);
    //     return sql.rows;
    // }

    static async saveOrder(order) {

        let insertedOrder;

        //if (order.id) {
            insertedOrder = await client.query (`
          INSERT INTO order (title, description, quantity, price_ht, price_ttc, url, shop_id, category_id)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING id;`, [
            order.title,
            order.description,
            order.quantity,
            order.price_ht,
            order.price_ttc,
            order.url,
            order.shop_id,
            order.category_id           
          ]);
     return insertedOrder.rows[0];
    }

      static async updateOrder(data){
           // we decomposed the SQL requeste with the informations we want to insert 
           const sql = `UPDATE order SET "title" = $1, "description" = $2, "quantity" = $3, "price_ht" = $4, "price_ttc" = $5, "url" = $6, "shop_id" = $7, "category_id" = $8, "updated_at" = now() WHERE "id" = $9 RETURNING "id", "title", "description", "quantity", "price_ht", "price_ttc", "url", "shop_id", "category_id";`;
           // we will connect to the db with us order, and we stock the complete request in the data for the return 
           const dataUpdate = await client.query(sql, [data.title, data.description, data.quantity, data.price_ht, data.price_ttc, data.url, data.shop_id, data.category_id, data.id]);
           //dataUpdate.rows[0].message = 'Le produit est bien modifié';
           // We send the new datas 
           return dataUpdate.rows[0];
        
      }

    static async deleteOrder (id) {
      const orderToDelete = await client.query (`
      DELETE FROM order WHERE id=$1;
      `, [id]);
      return orderToDelete.rows[0];

    }
};

module.exports = Order;