const express =require("express");
const router=express.Router();
const userController=require('../controllers/user.controllers');
const jwtVerify=require('../middlewares/isAuth');
const isAdmin=require('../middlewares/isAdmin');
const uploadUser=require('../middlewares/uploadUserFile');




//obtener usuarios
router.get('/users/:id?', userController.getUser);
//agregar nuevo usuario

router.post('/users',uploadUser, userController.createUser);

//eliminar
router.delete('/users/:idUser',[jwtVerify,isAdmin], userController.deleteUser);

//actualizar un usuario 
router.put('/users/:id', [jwtVerify,isAdmin], userController.editUser);

//login
router.post('/login',userController.login);


module.exports =router;