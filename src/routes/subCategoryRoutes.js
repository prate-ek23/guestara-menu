const express = require('express');
const {
  getAllSubCategories,
  createNewSubCategory,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require('../controllers/subCategoryController');

const subCategoryRouter = express.Router();

subCategoryRouter.route('/').get(getAllSubCategories).post(createNewSubCategory);
subCategoryRouter
  .route('/:subCategoryID')
  .get(getSubCategory)
  .patch(updateSubCategory)
  .delete(deleteSubCategory);

module.exports = subCategoryRouter;
