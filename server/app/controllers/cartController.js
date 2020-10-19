const productModel = require('../models/productModel');


const cartController = {

  // method to display the cart
  cartPage: (request, response) => {
    // when the basket is not empty I count the totals
    if (request.session.cart) {
      // i want to determine the total price
      // I will go through my cart and add the prices of each item multiplied by the quantity
      let priceHT = 0;
      for(const product of request.session.cart) {
        priceHT += (product.price * product.quantity);
      }
      const tva = priceHT * 0.05;

      response.json('/cart', {
        products: request.session.cart,
        priceHT: priceHT,
        fdp: 9.99,
        tva: tva,
        ttc: priceHT + tva
      });
    }
    else {
      response.json('/cart', {
        products: null
      });
    }

  },

  addProduct: (request, response) => {

    const id = parseInt(request.params.id, 10);

    // I will add the requested product in the session
    // If the cart does not exist, it must be created! (req.session.cart = [])
    if (!request.session.cart) {
      request.session.cart = [];
    }
    // Then test if the product is already in the cart.
    const foundProduct = request.session.cart.find((product) => {
      return id === product.id;
    });
 
    // If the product is not in the cart, retrieve the product from the database with Product.getProductByID.
    if (!foundProduct) {
      Product.getProductByID(id, (error, product) => {
        // if there was an error

        if (error) {
          // I send an 500 error
          response.sendStatus(500);
        }
        // sinon s'il n'y a pas de product
        else if (!product) {
          // I send an 404 error
          response.sendStatus(404);
        }
        // otherwise if all is well
        else {
          // Then add a quantity property to this product, and add it to the cart (req.session.cart.push(product))
          product.quantity = 1;
          request.session.cart.push(product);
  
          response.redirect('/cart');
        }
      });
    }
    else {
       
        foundProduct.quantity++;
        
        response.redirect('/cart');
    }
    
  },

  removeProduct: (request, response) => {

    // to the request id
    const id = parseInt(request.params.id, 10);

    // if not a cart, i was create to doesn't have an error
    if (!request.session.cart) {
      request.session.cart = [];
    }
    // find the search product in the cart's product
    const foundProduct = request.session.cart.find((product) => {
      return id === product.id;
    });

    // if there is no product, we are redirected to the cart
    if (!foundProduct) {
      response.redirect('/cart');
    }
    else {
        // Otherwise we decrease the quantity of the product found
        foundProduct.quantity--;
        // if there are more than 0, we transfer the product
        if (foundProduct.quantity === 0) {
          // I want a cart with 1 less item, the one I'm looking for

          // filter returns an array from the original array, except that it filters according to a criterion, here if the id is the one sought we transfer the product
          request.session.cart = request.session.cart.filter((product) => {
            return id !== product.id;
          });

          // if the cart was empty, we can remove this
          if (request.session.cart.length === 0) {
            delete request.session.cart;
          }
        }
        // we are redirected to the cart
        response.redirect('/cart');
    }
    
  },

};


module.exports = cartController;