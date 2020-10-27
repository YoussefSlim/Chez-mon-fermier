const Product = require('../models/Product');


const productController = {
    getProductById: async (req, res) => {
        res.json(await Product.findOne(req.params.id));
    },

    getAllProducts: async (req, res) => {
            res.json(await Product.findAll(req.params));
    },

    getProductsByCategory: async (req, res) => {
        res.json(await Product.findByCategory(req.params.id));
    },

    getProductsByShop: async (req, res) => {
        try{
        res.json(await Product.findByShop(req.params.id));
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    newProduct: async (req,res) => {
        try{
            const newProduct = new Product(req.body);
            console.log(req.body);
            console.log(newProduct);
            const insertedProduct = await Product.saveProduct(newProduct);
            if (insertedProduct) {
             
                res.json(insertedProduct);
                
            } else {
                // la ressource en elle-même est trouvée, mais pas la catégorie, c'est ça que reflète le code 404 ici
                res.status(404).json("Le produit n'a pas été enregistré");
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    error404: (req, res) => {
        res.status(404).json("La page demandée n'existe pas");
    },

    editProduct: async (req, res) => {
        try{
            const product = await Product.findOne(req.params.id);
            const productToEdit = new Product(product);
            for(const prop in req.body) {
                productToEdit[prop] = req.body[prop];
            }
            await Product.updateProduct(req.body);
            //Product.save();
            res.json(productToEdit);
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }, 

    deleteProduct: async (req,res)=> {
        const product = await Product.findOne(req.params.id);
        // console.log(Product.id);
            const productToDelete = new Product(product);
            await Product.deleteProduct(req.params.id);
            res.json ('Le produit a bien été supprimé');
    }
  };
  
  module.exports = productController;
