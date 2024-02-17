const express=require("express");
const router=express.Router();
const jwVerify=require ('../middlewares/isAuth');
const categoryController=require("../controllers/category.controllers");

router.get('/categories',categoryController.getCategories);
router.post('/categories',categoryController.postCategories );


module.exports=router;