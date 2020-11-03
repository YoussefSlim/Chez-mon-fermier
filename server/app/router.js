const express = require('express');

// importer les controllers
const mainController = require('./controllers/mainController');

const productController = require('./controllers/productController');
//const cartController = require('./controllers/cartController');
const categoryController = require('./controllers/categoryController');
const shopController = require('./controllers/shopController');
const orderController = require('./controllers/orderController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');


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
//router.get('/signup', userController.signupPage);
router.post('/signup', userController.customerSignup);
router.post('/login', userController.customerLogin);
router.post('/logout', userController.logout);

// Order zone
router.get('/order/:id', orderController.getOrderById);
router.get('/orders', orderController.getAllOrders);
router.get('/customer/:id/order', orderController.getOrdersByCustomer);
router.get('/shop/:id/order', orderController.getOrdersByShop);
router.post('/order', orderController.newOrder);
router.patch('/order/:id', orderController.editOrder);
router.delete('/order/:id', orderController.deleteOrder);

// Customer account managed
//router.get('/my-account', userController.profilePage);
router.get('/my-account/customer/:id', userController.customerById);
router.patch('/my-account/customer/:id', userController.editCustomer);
router.get('/my-account/:id/my-orders', orderController.getOrdersByCustomer);
router.patch('/order/:id', orderController.editOrder);

// Vendor account managed
//router.get('/my-account', userController.profilePage);
router.get('/my-shop/:id', userController.customerById);
router.patch('/my-shop/:id', userController.editCustomer);
//router.get('/my-account/:id/my-orders', orderController.getOrdersByShop);
//router.patch('/order/:id', orderController.editOrder);

// Admin dashboard manage
router.get('/admin', adminController.dashboard);
router.get('/admin/customers', adminController.allCustomers);
router.get('/admin/customer/:id', adminController.customerById);
router.patch('/admin/customer/:id', adminController.editCustomer);
router.get('/admin/addCustomer', adminController.addCustomerPage);
router.post('/admin/addCustomer', adminController.newCustomer);
router.get('/admin/editCustomer/:id', adminController.editCustomer);
router.patch('/admin/editCustomer/:id', adminController.editCustomer);
router.delete('/admin/deleteCustomer/:id', adminController.deleteCustomer);
// router.get('/admin/categories', categoryController.getAllCategory);
// router.get('/admin/category/:id', categoryController.getCategoryById);
// router.post('/admin/category',categoryController.newCategory);
// router.patch('/admin/category/:id', categoryController.editCategory);
// router.delete('/admin/category/:id', categoryController.deleteCategory);
// router.get('/admin/order/:id', orderController.getOrderById);
// router.get('/admin/orders', orderController.getAllOrders);
// router.post('/admin/order', orderController.newOrder);
// router.patch('/admin/order/:id', orderController.editOrder);
// router.delete('/admin/order/:id', orderController.deleteOrder);
// router.get('/admin/customer/:id/order', orderController.getOrdersByCustomer);
// router.get('/admin/shop/:id/order', orderController.getOrdersByShop);
// router.get('/admin/shop/:id', shopController.getShopById);
// router.get('/admin/shops', shopController.getAllShops);
// router.post('/admin/shop', shopController.newShop);
// router.patch('/admin/shop/:id', shopController.editShop);
// router.delete('/admin/shop/:id', shopController.deleteShop);
// router.get('/admin/product/:id', adminController.getProductById);
// router.get('/admin/products', productController.getAllProducts);
// router for see the products by the category id
router.get('/admin/category/:id/products', productController.getProductsByCategory);
// router for see the products by the shop id
router.get('/admin/shop/:id/product', productController.getProductsByShop);
router.post('/admin/product', productController.newProduct);
router.patch('/admin/product/:id', productController.editProduct);
router.delete('/admin/product/:id', productController.deleteProduct);

/*// admin
router.get('/admin', adminMiddleware, adminController.adminPage);
*/
router.get('/cart', cartController.cartPage);
router.get('/cart/add/:id', cartController.addProduct);
router.get('/cart/remove/:id', cartController.removeProduct);
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
