const productModel = require('../models/productModel');

const productController = {
    productPage: async (req, res) => {
        res.json(await productModel.getProductById());
    },

    allProducts: async (req, res) => {
            res.json(await productModel.getAllProducts());
    },

    productsByCategory: async (req, res) => {
        res.json(await productModel.getProductsByCategory());
    },

    productsByShop: async (req, res) => {
        res.json(await productModel.getProductsByShop());
    }
  };
  
  module.exports = productController;
