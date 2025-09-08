const express = require("express");
const router=express.Router();
const paquetesController = require('../controller/paquetesController');

router.get('/', paquetesController.obtenerPaquetes);
router.post('/crear', paquetesController.Paquetes);

module.exports=router;