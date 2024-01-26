const express =require("express");
const router=express.Router();
const userController=require('../controllers/user.controllers')



//obtener usuarios
router.get('/users',userController.getUser);
//agregar nuevo usuario
router.post('/users',userController.createUser);
//eliminar
router.delete('/users/:idUser', userController.deleteUser);
//actualizar un usuario
router.put('/users/:id',userController.editUser);
//obtener usuario especifico
router.get('/users/:id',userController.getUser);


module.exports =router;