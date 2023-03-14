const express = require('express');
const router = express.Router();

const { getProducts, getProduct, createProducts } = require('../controller/product')

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProducts)


module.exports = router