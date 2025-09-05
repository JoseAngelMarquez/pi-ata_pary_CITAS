const express = require("express");
const router=express.Router();
const usuariosController = require('../controller/usuariosController')
router.post('/login',usuariosController.loginquario);
router.post('/crear',usuariosController.crearUsuario);

module.exports=router;