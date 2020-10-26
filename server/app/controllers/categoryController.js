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

    newCategory: async (req,res) => {
        try{
            const newCategory = new Category(req.body);
            // console.log(req.body);
            // console.log(newCategory);
            const insertedCategory = await Category.saveCategory(newCategory);
            if (insertedCategory) {
             
                res.status(200).json('La catégorie a bien été ajoutée');
                
            } else {
                res.status(404).json("La catégorie n'a pas été enregistré");
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    error404: (req, res) => {
        res.status(404).json("La page demandée n'existe pas");
    },

    editCategory: async (req, res) => {
        try{
            const category = await Category.findOneCategory(req.params.id);
            const categoryToEdit = new Category(category);
            for(const prop in req.body) {
                categoryToEdit[prop] = req.body[prop];
            }
            await Category.updateCategory(req.body);
            //Category.save();
            res.json(categoryToEdit);
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }, 

    deleteCategory: async (req,res)=> {
        const category = await Category.findOneCategory(req.params.id);
        // console.log(Category.id);
        const categoryToDelete = new Category(category);
        await Category.deleteCategory(req.params.id);
        res.json ('Suppression de la catgorie réussi !');
    }
  };
  
  module.exports = CategoryController;
