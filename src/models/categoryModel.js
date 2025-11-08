const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An item must have a name'],
    unique: true,
    trim: true,
  },

  description: {
    type: String,
    required: [true, 'An item must have a description'],
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

  category_id: String,

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

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
