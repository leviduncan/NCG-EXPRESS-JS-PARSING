const path = require('path'); 

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

router.post('/product', (req, res, next) => {
    console.log(req.body.title)
    res.redirect('/')
})


module.exports = router