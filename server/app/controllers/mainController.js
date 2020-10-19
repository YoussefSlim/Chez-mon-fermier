const productModel = require('../models/productModel');

const mainController = {

  homePage: async (req, res) => {
    productModel.getProductByCreatedDate((error, products) => {
      // I will be able to see if there is an error
      if (error) {
        // if yes, send an error res
        console.trace(error);
        // res.status(500).send('Erreur bdd');
        res.sendStatus(500);
      }
      else {
        // otherwise send the home view with the info of products
        res.json('/', {
          products: products,
        });
      }
    });
    
}
};


module.exports = mainController;