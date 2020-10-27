const Product = require("../models/Product");

const mainController = {
  homePage: async (req, res) => {
    res.json("Bienvenue chezmonfermier.fr");
  },
};

module.exports = mainController;
