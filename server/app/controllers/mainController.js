const Product = require("../models/Product");

const mainController = {
  homePage: async (req, res) => {
    res.json("bienvenu chez mon fermier");
  },
};

module.exports = mainController;
