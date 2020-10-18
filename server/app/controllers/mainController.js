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
  },
  error404: (_, res) => {
    res.status(404).json('Hop là ! Tu t\'es perdu ? Y\'a rien par ici ...');
}
};


module.exports = mainController;