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

    newShop: async (req,res) => {
        try{
            const newShop = new Shop(req.body);
            // console.log(req.body);
            // console.log(newShop);
            const insertedShop = await Shop.saveShop(newShop);
            if (insertedShop) {
            res.json(insertedShop);
                
            } else {
                // la ressource en elle-même est trouvée, mais pas la catégorie, c'est ça que reflète le code 404 ici
                res.status(404).json("Le vendeur n'a pas été enregistré");
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    editShop: async (req, res) => {
        try{
            const shop = await Shop.findOneShop(req.params.id);
            const shopToEdit = new Shop(shop);
            for(const prop in req.body) {
                shopToEdit[prop] = req.body[prop];
            }
            await Shop.updateShop(req.body);
            //Shop.save();
            res.json(shopToEdit, 'Le vendeur a bien été modifié');
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }, 

    deleteShop: async (req,res)=> {
        const shop = await Shop.shopById(req.params.id);
        // console.log(shop.id);
        const shopToDelete = new Shop(shop);
        await Shop.deleteShop(req.params.id);
        res.json(shopToDelete, 'Le vendeur a bien été supprimé');
    }
  };
  
  module.exports = shopController;
