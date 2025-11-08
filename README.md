# Guestara Menu API

A RESTful API service for managing restaurant menus built with Node.js, Express, and MongoDB.

## Environment Variables

```env
DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.mongodb.net/project-name
DATABASE_PASSWORD=your_password
PORT=3000
```

- create a `config.env` file to put all these env variables
- Better would be to paste connection string from `mongoDB database`

## Setup & Installation

```bash
npm install     #To install all dependencies
npm start       #To start the server using nodemon
```

- After `npm start` if the console shows `DB connection successful`, then you are good to go!
- To ensure proper testing of the database and API endpoints, I've provided sample datasets in `dev-data`. To use them run following commands in given order:
    1. To delete all the files from the database: `node dev-data/import-dev-data.js --delete`
    2. To upload the datasets: `node dev-data/import-dev-data.js --import`
   
## API Endpoints

### Category Endpoints

```bash
GET    /api/v1/category                     # Get all categories
POST   /api/v1/category                     # Create new category
GET    /api/v1/category/:categoryID         # Get single category
PATCH  /api/v1/category/:categoryID         # Update category
DELETE /api/v1/category/:categoryID         # Delete category
```

### SubCategory Endpoints

```bash
GET     /api/v1/subCategory                                 # Get all subCategories
POST    /api/v1/subCategory                                 # Create new subCategory
GET     /api/v1/subCategory/:subCategoryID                  # Get single subCategory by ID
PATCH   /api/v1/subCategory/:subCategoryID                  # Update subCategory
DELETE  /api/v1/subCategory/:subCategoryID                  # Delete subCategory
GET     /api/v1/subCategory?category_name=Rajasthani        # Get all subCategories belonging to a category
```

### Item Endpoints

```bash
GET     /api/v1/item                                 # Get all items
POST    /api/v1/item                                 # Create new item
GET     /api/v1/item/:itemID                         # Get single item by ID
PATCH   /api/v1/item/:itemID                         # Update item
DELETE  /api/v1/item/:itemID                         # Delete item
GET     /api/v1/item/?name=ItalianJalebi             # Get item by the name
GET     /api/v1/item/?<query string>                 # Get items according to the query
```

## Features

- Complete CRUD operations for categories, subCategories, items and menus
- MongoDB database integration
- Error handling
- Environment configuration
- API versioning (v1)

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Development

```bash
npm run dev
nodemon server.js
```


## Error Handling

The API includes handling for:

- Database errors
- Validation errors
- 404 routes
- Operational errors
