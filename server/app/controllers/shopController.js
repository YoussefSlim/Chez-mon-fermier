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
    },

    newShop: async (req,res)=> {
        const newShop = new shop(req.body);
        await newShop.saveShop();
        res.json(newShop);
    },

    editShop: async (req, res) => {
        const shop = await shop.shopById(req.params.id);

        const shopToEdit = new shop(shop);

        if (shopToEdit) {
            shopToEdit.updateShop(req.body);
            await shopToEdit.save();
            res.json(shopToEdit)
        }
    }, 

    deleteShop: async (req,res)=> {
        const shop = await shop.shopById(req.params.id);
        // console.log(shop.id);
        if (shop) {
            const shopToDelete = new shop(shop);
            await shopToDelete.deleteShop();
            res.json ('suppression effectuée');
        } else {
            res.json('Suppression impossible')
        };
    }
  };
  
  module.exports = shopController;
