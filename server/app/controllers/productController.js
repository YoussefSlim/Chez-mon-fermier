const productModel = require('../models/productModel');

const productController = {
    productPage: (request, response) => {
    
        const id = parseInt(request.params.id, 10);
        productModel.getproductModelByID(id, (error, product) => {
        // if nothing was all right
        if (error) {
            // i render an 500's error
            response.sendStatus(500);
        }
        // sinon s'il n'y a pas de figurine
        else if (!product) {
            // je renvoie une erreur 404
            response.sendStatus(404);
        }
        // If it's all right
        else {
            // I send the infos of the product by json
            response.json('/product/:id', {
            product: product,
            });
        }
        });
    },
    AllProducts: (request, response) => {
    
        const id = parseInt(request.params.id, 10);
        productModel.getAllProducts(id, (error, products) => {
        // if nothing was all right
        if (error) {
            // i render an 500's error
            response.sendStatus(500);
        }
        // sinon s'il n'y a pas de figurine
        else if (!products) {
            // je renvoie une erreur 404
            response.sendStatus(404);
        }
        // If it's all right
        else {
            // I send the infos of the product by json
            response.json('/products', {
            products: products,
            });
        }
        });
    },
    getProductsByCategory: (request, response) => {
    
        const id = parseInt(request.params.id, 10);
        productModel.getProductsByCategory(id, (error, products) => {
        // if nothing was all right
        if (error) {
            // i render an 500's error
            response.sendStatus(500);
        }
        // sinon s'il n'y a pas de figurine
        else if (!products) {
            // je renvoie une erreur 404
            response.sendStatus(404);
        }
        // If it's all right
        else {
            // I send the infos of the product by json
            response.json('/category/products', {
            products: products,
            });
        }
        });
    }

  };
  
  module.exports = productController;
