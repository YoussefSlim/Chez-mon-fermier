const Category = require('../models/Category');

const CategoryController = {
    getCategoryById: async (req, res) => {
        res.json(await Category.findOneCategory(req.params.id));
    },

    getAllCategory: async (req, res) => {
            res.json(await Category.findAllCategories(req.params));
    },

    getCategoryByParentId: async (req, res) => {
        res.json(await Category.findCategoryByParentId(req.params.id));
    },

    newCategory: async (req,res)=> {
        const newCategory = new Category(req.body);
        await newCategory.saveCategory();
        if (newCategory.id) {
            res.json(newCategory);
        } else {
            // la ressource en elle-même est trouvée, mais pas la catégorie, c'est ça que reflète le code 404 ici
            res.status(404).json(newCategory);
        }
        
    },
    error404: (req, res) => {
        res.status(404).json("La page demandée n'existe pas");
    },

    editCategory: async (req, res) => {
        const category = await Category.findOneCategory(null, req.params.id);

        const categoryToEdit = new Category(category);

        categoryToEdit.updateCategory(req.body);
        categoryToEdit.saveCategory();
        res.json(categoryToEdit);
    }, 

    deleteCategory: async (req,res)=> {
        const category = await Category.findOneCategory(null, req.params.id);
        // console.log(Category.id);
            const categoryToDelete = new Category(category);
            await categoryToDelete.deleteCategory();
            res.json ('suppression du produit effectuée');
    }
  };
  
  module.exports = CategoryController;
