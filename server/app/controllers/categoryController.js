const category = require('../models/category');

const categoryController = {
    categoryPage: async (req, res) => {
        res.json(await category.getCategoryById());
    },

    allCategories: async (req, res) => {
            res.json(await category.getAllCategories());
    },

    categoryByParentId: async (req, res) => {
        res.json(await category.getCategoryByParentId());
    }
  };
  
  module.exports = categoryController;
