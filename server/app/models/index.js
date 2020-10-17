const Product = require('./product');
const Category = require('./category');
//const Shop = require('./shop');
//const User = require('.user');
/*
// Product has once shop
Product.belongsTo(Shop, {
    foreignKey : "shop_id",
    as: "shop"
});

// ... and the reciprocal !
Shop.hasMany(Product, {
    foreignKey: "shop_id",
    as: "product"
});*/

// product's has many category
Product.belongsToMany(Category, {
    as: "categories", // association's alias
    through: 'product_has_category', // "to the link table's name"
    foreignKey: 'product_id', // the name of product's key in the link table
    otherKey: 'category_id', // the name of the other key (so category)
});

// ... and the reciprocal !
Category.belongsToMany(Product, {
    as: "products",
    through: 'product_has_category',
    otherKey: 'product_id',
    foreignKey: 'category_id'
});