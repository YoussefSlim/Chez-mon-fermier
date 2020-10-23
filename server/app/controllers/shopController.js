const Shop = require('../models/Shop');

const shopController = {
    getShopById: async (req, res) => {
        res.json(await Shop.findOneShop(req.params.id));
    },

    getAllShops: async (req, res) => {
            res.json(await Shop.findAllShops(req.params));
    },

    getShopByDepartment: async (req, res) => {
        res.json(await Shop.findShopByDepartment(req.body.searchDpt));
    },
    
    getShopByCreatedDate: async (req, res) => {
        res.json(await Shop.findShopByCreatedDate(req.params));
    },

    newShop: async (req,res)=> {
        const newShop = new Shop(req.body);
        await newShop.save();
        res.json(newShop);
    },

    editShop: async (req, res) => {
        const shop = await Shop.shopById(req.params.id);

        const shopToEdit = new Shop(shop);

        if (shopToEdit) {
            shopToEdit.updateShop(req.body);
            await shopToEdit.save();
            res.json(shopToEdit)
        }
    }, 

    deleteShop: async (req,res)=> {
        const shop = await Shop.shopById(req.params.id);
        // console.log(shop.id);
        if (shop) {
            const shopToDelete = new Shop(shop);
            await shopToDelete.deleteShop();
            res.json ('suppression effectuée');
        } else {
            res.json('Suppression impossible')
        };
    }
  };
  
  module.exports = shopController;
