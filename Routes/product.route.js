const express = require('express');
const router = express.Router();
const Product  = require("../models/product.model.js")
const productController = require("../controllers/product.controller.js")
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = productController;

router.get('/',getProducts);
router.get('\:id',getProduct);
router.post('/',createProduct);
router.put('\:id',updateProduct);
router.delete('\:id',deleteProduct);

module.exports = router;