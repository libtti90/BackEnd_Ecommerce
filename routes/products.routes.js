const express = require("express");
const router = express.Router();
const productController=require('../controllers/product.controllers')
const jwtVerify=require('../middlewares/isAuth');
const isAdmin=require('../middlewares/isAdmin')
const upload=require('../middlewares/uploadProductFile')




//router.get('/products',productController.getProduct);

router.post('/products',upload,productController.createProduct);

router.delete('/products/:idProduct',[jwtVerify,isAdmin], productController.deleteProduct);

router.put('/products/:id',[jwtVerify,upload],productController.editProduct);

router.get('/products', productController.getProduct);

router.get('/products/:id',productController.getProduct);







module.exports =router;