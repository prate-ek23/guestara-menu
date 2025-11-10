const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An item must have a name'],
    unique: true,
    trim: true,
  },

  // categoryID: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: [true, 'Sub-category must belong to a category'],
  // },
  category_id: {
    type: String,
    required: [true, 'A sub-category must have a category id'],
    // unique: true,
  },

  category_name: {
    type: String,
    required: [true, 'A sub-category must have a category name'],
    // unique: true,
  },

  description: {
    type: String,
    required: [true, 'A sub-category must have a description'],
    trim: true,
  },

  image: {
    type: String,
    trim: true,
    // unique: true,
  },
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
    validate: {
      validator: function (value) {
        return !(this.taxApplicability === true && !value);
      },
      message: 'Tax percentage is required if taxApplicability is true',
    },
  },

  taxType: {
    //if applicable
    type: String,
    validate: {
      validator: function (value) {
        return !(this.taxApplicability === true && !value);
      },
      message: 'Tax type is required if taxApplicability is true',
    },
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);
module.exports = SubCategory;
