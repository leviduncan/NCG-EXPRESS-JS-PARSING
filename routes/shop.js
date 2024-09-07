const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Welcome to Home Page</h1><p><a href="/add-product">Add Product</a></p>')
})

module.exports = router