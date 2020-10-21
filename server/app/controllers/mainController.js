const productModel = require('../models/productModel');

const mainController = {

  homePage: async (req, res) => {
    res.json(await productModel.getProductByCreatedDate());
    }

};


module.exports = mainController;