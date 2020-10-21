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
        res.json(await Product.findByShop(req.params.id));
    },

    newProduct: async (req,res)=> {
        const newProduct = new Product(req.body);
        await newProduct.saveProduct();
        if (newProduct.id) {
            res.json(newProduct);
        } else {
            // la ressource en elle-même est trouvée, mais pas la catégorie, c'est ça que reflète le code 404 ici
            res.status(404).json(newProduct);
        }
        
    },
    error404: (req, res) => {
        res.status(404).json("La page demandée n'existe pas");
    },

    editProduct: async (req, res) => {
        const product = await Product.findOne(null, req.params.id);

        const productToEdit = new Product(product);

        productToEdit.updateProduct(req.body);
        productToEdit.saveProduct();
        res.json(productToEdit);
    }, 

    deleteProduct: async (req,res)=> {
        const product = await Product.findOne(null, req.params.id);
        // console.log(Product.id);
            const productToDelete = new Product(product);
            await productToDelete.deleteProduct();
            res.json ('suppression du produit effectuée');
    }
  };
  
  module.exports = productController;
