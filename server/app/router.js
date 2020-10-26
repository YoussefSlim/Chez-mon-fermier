const express = require('express');

// importer les controllers
const mainController = require('./controllers/mainController');

const productController = require('./controllers/productController');
//const cartController = require('./controllers/cartController');
const categoryController = require('./controllers/categoryController');
const shopController = require('./controllers/shopController');
const orderController = require('./controllers/orderController');
const userController = require('./controllers/userController');

//const adminController = require('./controllers/adminController');

/*
// importer les middlewares
const adminMiddleware = require('./middlewares/admin');
*/
const router = express.Router();

// home Page
router.get('/', mainController.homePage);

// product's detail page
router.get('/product/:id', productController.getProductById);
// products catalog
router.get('/products', productController.getAllProducts);
// router for see the products by the category id
router.get('/category/:id/products', productController.getProductsByCategory);
// router for see the products by the shop id
router.get('/shop/:id/product', productController.getProductsByShop);
router.post('/product', productController.newProduct);
router.patch('/product/:id', productController.editProduct);
router.delete('/product/:id', productController.deleteProduct);
//router.post('/product/:id', productController.productAddCart);

// category section
router.get('/category/:id', categoryController.getCategoryById);
router.get('/categories', categoryController.getAllCategory);
router.post('/category',categoryController.newCategory);
router.patch('/category/:id', categoryController.editCategory);
router.delete('/category/:id', categoryController.deleteCategory);

// shop section
router.get('/shop/:id', shopController.getShopById);
router.get('/shops', shopController.getAllShops);
router.post('/shop', shopController.newShop);
router.patch('/shop/:id', shopController.editShop);
router.delete('/shop/:id', shopController.deleteShop);
// a corriger
// router.get('/last-shops', shopController.getShopByCreatedDate);
// router.get('/shops-by-department', shopController.getShopByDepartment);

// custommers

router.get('/customers', userController.allCustomers);
router.get('/customer/:id', userController.customerById);
router.post('/customer', userController.newCustomer);
router.patch('/customer/:id', userController.editCustomer);
router.delete('/customer/:id', userController.deleteCustomer);

// user signup/login
router.get('/signup', userController.signupPage);
router.post('/signup', userController.customerSignup);
router.post('/login', userController.customerLogin);
router.post('/logout', userController.logout);

// Customer account managed
//router.get('/my-account', userController.profilePage);
router.get('/my-account/customer/:id', userController.customerById);
router.patch('/my-account/customer/:id', userController.editCustomer);
router.get('/my-account/:id/my-orders', orderController.getOrdersByCustomer);
router.patch('/order/:id', orderController.editOrder);

// Customer account managed
//router.get('/my-account', userController.profilePage);
router.get('/my-shop/:id', userController.customerById);
router.patch('/my-shop/:id', userController.editCustomer);
//router.get('/my-account/:id/my-orders', orderController.getOrdersByShop);
//router.patch('/order/:id', orderController.editOrder);


/*// admin
router.get('/admin', adminMiddleware, adminController.adminPage);
*/
// router.get('/cart', cartController.cartPage);
// router.get('/cart/add/:id', cartController.addProduct);
// router.get('/cart/remove/:id', cartController.removeProduct);
// router.get('/admin', (req, res) => {
//     // ici je vais tester si on s'est connecté ou pas
//     // dès qu'on veut accéder aux données mémorisées pour un utilisateur on peut lire la session
//     if (req.session.role === 'admin') {
//         res.json('Page admin secrête');
//     }
//     else {
//         res.send('tu n\'as pas le droit de voir cette page');
//     }
// });

module.exports = router;