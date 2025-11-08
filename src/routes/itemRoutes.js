const express = require('express');
const {
  getAllItems,
  createNewItem,
  getItem,
  updateItem,
  deleteItem,
} = require('../controllers/itemController');

const itemRouter = express.Router();

itemRouter.route('/').get(getAllItems).post(createNewItem);
itemRouter.route('/:itemID').get(getItem).patch(updateItem).delete(deleteItem);

module.exports = itemRouter;
