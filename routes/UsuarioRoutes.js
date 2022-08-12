const express = require('express');
const usuario_router = express.Router();
const usuario_controller = require('../controller/UsuarioController.js');


function registrarUsuario(){
    usuario_router.get('/registrar',usuario_controller.methods_get.abreRegistrar);  
    usuario_router.post('/registrar',usuario_controller.methods_post.addUsuario);
}

registrarUsuario();



module.exports = usuario_router;