const shop = require('../models/shop');

const shopController = {
    shopById: async (req, res) => {
        res.json(await shop.getShopById());
    },

    allShops: async (req, res) => {
            res.json(await shop.getAllShops());
    },

    shopByDepartment: async (req, res) => {
        res.json(await shop.getShopByDepartment());
    },
    
    shopByCreatedDate: async (req, res) => {
        res.json(await shop.getShopByCreatedDate());
    }
  };
  
  module.exports = shopController;
