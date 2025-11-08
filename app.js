const express = require('express');
// const { get } = require('http');
const app = express();

app.use(express.json());
const categoryRouter = require('./src/routes/categoryRoutes');
const subCategoryRouter = require('./src/routes/subCategoryRoutes');
const itemRouter = require('./src/routes/itemRoutes');

app.get('/', (req, res) => {
  res.status(200).send('Hello from the server side!');
});


// mounting the routers
app.use('/api/v1/menu/category', categoryRouter); 
app.use('/api/v1/menu/subCategory', subCategoryRouter); 
app.use('/api/v1/menu/item', itemRouter); 


module.exports = app;