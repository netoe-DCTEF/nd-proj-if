const express = require('express');
const usuario_router = express.Router();
const usuario_controller = require('../controller/UsuarioController.js');

usuario_router.get('/home',usuario_controller.methods_get.abreHome);
usuario_router.get('/login',usuario_controller.methods_get.abreLogin);
usuario_router.get('/registrar',usuario_controller.methods_get.abreRegistrar);

usuario_router.post('/registrar',usuario_controller.methods_post.addUsuario);

module.exports = usuario_router;