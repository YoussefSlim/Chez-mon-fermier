const express = require('express');

// importer les controllers
const mainController = require('./controllers/mainController');

const productController = require('./controllers/productController');
const cartController = require('./controllers/cartController');
/*const categoryController = require('./controllers/categoryController');
const orderController = require('./controllers/orderController');
const userController = require('./controllers/userController');
const shopController = require('./controllers/shopController');
const adminController = require('./controllers/adminController');
*/

/*
// importer les middlewares
const adminMiddleware = require('./middlewares/admin');
*/
const router = express.Router();

// home Page
//router.get('/', mainController.homePage);
router.get('/', mainController.homePage);


// product's detail page
router.get('/product/:id', productController.productPage);
//router.post('/product/:id', productController.productAddCart);
// product's catalog
router.get('/products', productController.AllProducts);
/*// user signup/login
router.get('/signup', userController.signupPage);
router.get('/login', userController.loginPage);
router.post('/signup', userController.signupAction);
router.post('/login', userController.loginAction);
router.get('/disconnect', userController.disconnect);
router.get('/my-account', userController.profilePage);
// admin
router.get('/admin', adminMiddleware, adminController.adminPage);
*/
router.get('/cart', cartController.cartPage);
router.get('/cart/add/:id', cartController.addProduct);
router.get('/cart/remove/:id', cartController.removeProduct);

module.exports = router;