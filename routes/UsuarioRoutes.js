const express = require('express');
const usuario_router = express.Router();
const usuario_controller = require('../controller/UsuarioController.js');


usuario_router.get('/home',usuario_controller.abreHome);
usuario_router.get('/login',usuario_controller.abreLogin);
usuario_router.get('/registrar',usuario_controller.abreRegistrar);


module.exports = usuario_router;