const Order = require('../models/Order');


const orderController = {
    getOrderById: async (req, res) => {
        res.json(await Order.findOneOrder(req.params.id));
    },

    getAllOrders: async (req, res) => {
            res.json(await Order.findAllOrders(req.params));
    },

    getOrdersByCustomer: async (req, res) => {
        res.json(await Order.findOrdersByCustomer(req.params.id));
    },

    getOrdersByShop: async (req, res) => {
        try{
        res.json(await Order.findOrderByShop(req.params.id));
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    newOrder: async (req,res) => {
        try{
            const newOrder = new Order(req.body);
            console.log(req.body);
            console.log(newOrder);
            const insertedOrder = await Order.saveOrder(newOrder);
            if (insertedOrder) {
             
                res.json(insertedOrder);
                
            } else {
                // la ressource en elle-même est trouvée, mais pas la catégorie, c'est ça que reflète le code 404 ici
                res.status(404).json("La commande n'a pas été enregistré");
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    error404: (req, res) => {
        res.status(404).json("La page demandée n'existe pas");
    },

    editOrder: async (req, res) => {
        try{
            const order = await Order.findOne(req.params.id);
            const orderToEdit = new Order(order);
            for(const prop in req.body) {
                orderToEdit[prop] = req.body[prop];
            }
            await Order.updateOrder(req.body);
            //Order.save();
            res.json(orderToEdit);
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }, 

    deleteOrder: async (req,res)=> {
        const order = await Order.findOne(req.params.id);
        // console.log(Order.id);
            const orderToDelete = new Order(order);
            await Order.deleteOrder(req.params.id);
            res.json ('La commande a bien été supprimé');
    }
  };
  
  module.exports = orderController;
