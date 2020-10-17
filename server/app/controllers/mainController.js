const { Product } = require('../models/');

const mainController = {

  homePage: async (req, res) => {
    try {
      const products = await Product.findByPk({
        include: ['category']
      });
      res.render('home', { products });
    } catch (err) {
      console.trace(err);
      res.status(500).send(err);
    }
  }
};


module.exports = mainController;