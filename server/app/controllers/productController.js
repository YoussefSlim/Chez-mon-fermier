const { Product, Category } = require('../models');

const productController = {

    productDetail: async (req, res) => {
        try {
            const productId = parseInt(req.params.id);
            const product = await Product.findByPk(productId, {
                include: [
                    { association: 'category' },
                    { association: 'shop' }
                ]
            });
            res.render(req.session.user ? 'cart' : 'product', { product });
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    listByCategory: async (req, res) =>{
        try {
            const categoryId = parseInt(req.params.id);
            const category = await Category.findByPk(categoryId, {
                include: [{
                    association: 'products'
                }]
            });
            const products = category.products;
            res.render('home', { products });
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
};

module.exports = productController;