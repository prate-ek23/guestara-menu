const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An item must have a name'],
    unique: true,
  },
  
  description: String,
  image: String,
  // Image: URL,
  taxApplicability: {
    type: Boolean,
    enum: [true, false],
    default: false,
    required: true,
  },

  tax: {
    //if applicable
    type: Number,
    required: function () {
      return this.taxApplicability === true;
    },
  },

  taxType: {
    //if applicable
    type: String,
    required: function () {
      return this.taxApplicability === true;
    },
  },

  category_id: {
    type: String,
    required: [true, 'An item must have a category id'],
    // unqiue: true,
  },

  category_name: {
    type: String,
    required: [true, 'An item must have a category name'],
    // unqiue: true,
  },

  subcategory_id: {
    type: String,
    required: [true, 'An item must have a sub-category id'],
    // unqiue: true,
  },

  subcategory_name: {
    type: String,
    required: [true, 'An item must have a sub-category name'],
    // unqiue: true,
  },
  discount: Number,

  base_amount: {
    type: Number,
    required: [true, 'An item must have a base amount'],
  },
  
  total_amount: {
    type: Number,
    required: [true, 'An item must have a total amount'],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  // category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: [true, 'Item must belong to a category'],
  // },

  // subCategory: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'SubCategory',
  //   required: [true, 'Item must belong to a category'],
  // },
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
