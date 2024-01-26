const express = require("express");
const router = express.Router();
const productController=require('../controllers/product.controllers')



//router.get('/products',productController.getProduct);

router.post('/products',productController.createProduct);

router.delete('/products/:idProduct', productController.deleteProduct);

router.put('/products/:id',productController.editProduct);

router.get('/products',productController.getProduct);

router.get('/products/:id',productController.getProduct);







module.exports =router;