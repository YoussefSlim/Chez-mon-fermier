const Product = require('../models/Product');

const mainController = {

  homePage: async (req, res) => {
    res.json(await Product.findOne(req.params.id));
    }

};


module.exports = mainController;