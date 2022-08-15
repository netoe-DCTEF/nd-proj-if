const express = require('express');
const router = express.Router();
const controller = require('../controller/UsuarioController.js');


function getF(){
    router.get('/registrar',controller.get.abreRegistrar);
}

function postF(){ 
    router.post('/registrar',controller.post.addUsuario); 
}

getF();
postF();



module.exports = router;