const Product = require('../models/Product');

const mainController = {

  homePage: async (req, res) => {
    res.json(await Product.getProductByCreatedDate());
    }

};


module.exports = mainController;