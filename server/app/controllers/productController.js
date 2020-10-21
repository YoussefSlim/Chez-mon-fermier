const productModel = require('../models/productModel');

const productController = {
    productPage: async (req, res) => {
        res.json(await productModel.getProductById(req.params.id));
    },

    allProducts: async (req, res) => {
            res.json(await productModel.getAllProducts(req.params));
    },

    productsByCategory: async (req, res) => {
        res.json(await productModel.getProductsByCategory(req.params.id));
    },

    productsByShop: async (req, res) => {
        res.json(await productModel.getProductsByShop(req.params.id));
    }
  };
  
  module.exports = productController;
