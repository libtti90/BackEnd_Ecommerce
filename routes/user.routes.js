const express =require("express");
const router=express.Router();
const userController=require('../controllers/user.controllers');
const jwtVerify=require('../middlewares/isAuth')




//obtener usuarios
router.get('/users/:id?', userController.getUser);
//agregar nuevo usuario
router.post('/users',userController.createUser);
//eliminar
router.delete('/users/:idUser',jwtVerify, userController.deleteUser);

//actualizar un usuario 
router.put('/users/:id', jwtVerify, userController.editUser);

//login
router.post('/login',userController.login);


module.exports =router;