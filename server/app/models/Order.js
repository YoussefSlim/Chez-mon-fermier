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
       
    static async findOrdersByShop(orderId) {
      try{  
      const sql =  await client.query(`SELECT "order".id, "product".title, "shop".id FROM "order" 
      JOIN "product_has_order" ON order_id = "order".id
      JOIN "product" ON "product".id = "product_has_order".product_id
      JOIN "shop" ON "product".shop_id = "shop".id
      WHERE "shop".id = 1;`, [orderId]);
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
          INSERT INTO order (order_number, amount, customer_id,)
          VALUES ($1, $2, $3)
          RETURNING id;`, [
            order.order_number,
            order.amount,
            order.customer_id,           
          ]);
     return insertedOrder.rows[0];
    }

      static async updateOrder(data){
           // we decomposed the SQL requeste with the informations we want to insert 
           const sql = `UPDATE order SET "order_number" = $1, "amount" = $2, "customer_id" = $3, updated_at" = now() WHERE "id" = $4 RETURNING "id", "order_number", "amount", "cutomer_id";`;
           // we will connect to the db with us order, and we stock the complete request in the data for the return 
           const dataUpdate = await client.query(sql, [data.order_number, data.amount, data.customer_id, data.id]);
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