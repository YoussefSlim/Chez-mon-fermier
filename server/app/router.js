const express = require('express');

// importer les controllers
const mainController = require('./controllers/mainController');

const productController = require('./controllers/productController');
//const cartController = require('./controllers/cartController');
const categoryController = require('./controllers/categoryController');
const { productsByShop } = require('./controllers/productController');
const shopController = require('./controllers/shopController');
//const orderController = require('./controllers/orderController');
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
router.get('/product/:id', productController.productPage);

// products catalog
router.get('/products', productController.allProducts);

// router for see the products by the category id
router.get('/product/category/:id', productController.productsByCategory);

// router for see the products by the shop id
router.get('/product/shop/:id', productController.productsByShop);

//router.post('/product/:id', productController.productAddCart);

// category page
router.get('/category/:id', categoryController.categoryPage);

// all categories page
router.get('/categories', categoryController.allCategories);

router.get('/shop/:id', shopController.shopById);
router.get('/shops', shopController.allShops);
router.get('/new-shops', shopController.shopByCreatedDate);
//router.get('/shops-by-department', shopController.shopByDepartment);

// custommers

router.get('/customers', userController.allCustomers);
router.get('/customer/:id', userController.customerById);
router.post('/new-customer', userController.newCustomer);
router.post('/edit-customer/:id', userController.editCustomer);
router.post('/delete-customer', userController.deleteCustomer);

// user signup/login
router.post('/signup', userController.customerSignup);
router.post('/login', userController.customerLogin);
router.post('/logout', userController.logout);
//router.get('/my-account', userController.profilePage);
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