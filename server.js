// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware setup
app.use(bodyParser.json());

// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];


// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// TODO: Implement the following routes:
// GET /api/products - Get all products
app.get('/api/products',(req,res)=>{
  res.send(products);
});
// GET /api/products/:id - Get a specific product
app.get('/api/products/:id',(req,res)=> {
  const id = req.params.id;
  const product = products.find((products)=> products.id === id)
  console.log(product);
  res.send(product);
});
// POST /api/products - Create a new product
app.post('/api/products',(req,res)=>{
  products.push(req.body);
  res.send('New Product Successfully created')
});
// PUT /api/products/:id - Update a product
app.put('/api/products/:id',(req,res)=>{
  const id =parseInt(req.params.id);
  products[id]=req.body;
   res.send('Product Successfully Updated')
});
// DELETE /api/products/:id - Delete a product
app.delete('/api/products/:id',(req,res)=>{
  const id =parseInt(req.params.id);
  products.splice(id-1,1);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 