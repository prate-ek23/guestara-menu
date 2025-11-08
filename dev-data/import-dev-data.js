const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const Category = require('../models/categoryModel');
const SubCategory = require('../models/subCategoryModel');
const Item = require('../models/itemModel');

// reading the config file
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  // .connect(process.env.DATABASE_LOCAL, { -> To connect local database
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    // console.log(con.connections);
    console.log('DB Connection successful');
  });

// Reading JSON File
const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/categories.json`, 'utf-8')
);
const subCategories = JSON.parse(
  fs.readFileSync(`${__dirname}/subCategories.json`, 'utf-8')
);
const items = JSON.parse(fs.readFileSync(`${__dirname}/items.json`, 'utf-8'));

// Import data into DB
const importData = async () => {
  try {
    await Category.create(categories, { validateBeforeSave: false });
    await SubCategory.create(subCategories, { validateBeforeSave: false });
    await Item.create(items, { validateBeforeSave: false });
    console.log('Data successfully loaded !');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Category.deleteMany();
    await SubCategory.deleteMany();
    await Item.deleteMany();
    console.log('Data successfully deleted !');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// console.log(process.argv);

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
