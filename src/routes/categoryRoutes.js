const express = require('express');
const {
  getAllCategories,
  createNewCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.route('/').get(getAllCategories).post(createNewCategory);
categoryRouter
  .route('/:categoryID')
  .get(getCategory)
  .patch(updateCategory)
  .delete(deleteCategory);

module.exports = categoryRouter;
