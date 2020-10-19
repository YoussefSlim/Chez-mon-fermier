const shop = require('../models/shop');

const shopController = {
    shopById: async (req, res) => {
        res.json(await shop.getShopById(req.params.id));
    },

    allShops: async (req, res) => {
            res.json(await shop.getAllShops());
    },

    shopByDepartment: async (req, res) => {
        res.json(await shop.getShopByDepartment(req.body.searchDpt));
    },
    
    shopByCreatedDate: async (req, res) => {
        res.json(await shop.getShopByCreatedDate());
    }
  };
  
  module.exports = shopController;
