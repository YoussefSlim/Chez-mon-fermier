const Product = require('../models');

const productController = {
    init: async() => {
        //productController.findById();
        const id = request.params.product;

        const isProduct = await Product.findById(id);

    },

    findById: async (req, res) => {
        //res.json(await Product.findById(req.body))
        res.json(await Product.findById(req.body));
        
        // try {
        //     const product = await Product.findById();
        //     // envoyer une réponse
        //     res.json(product);
        // } catch(error) {
        //     console.trace(error);
        //     res.status(500).json(error.toString());
        //   }
    },
    
    findAll: async (req, res) => {
        try {
            const products = await Product.findAll({
                limit: 12,
                order : [
                    ['id', 'DESC'],
                ],
            });
            // envoyer une réponse
            res.json(products);
        } catch(error) {
            console.trace(error);
            res.status(500).json(error.toString());
          }
     },

    addProduct: async (req, res) => {
        const newProduct = new Product(req.body);
        await newProduct.save();

        res.json(newProduct);
    }
};

module.exports = productController;