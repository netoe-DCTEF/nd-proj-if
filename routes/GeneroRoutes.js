const express = require('express');
const router = express.Router();
const controller = require('../controller/GeneroController');

function getF(){
    router.get('/add',controller.get.abreaadd);
    router.get('/list',controller.get.abrelist);
    router.get('/edit/:id',controller.get.abreedit);
    router.get('/delete/:id',controller.get.deleta);
}

function postF(){
    router.post('/add',controller.post.add);
    router.post('/edit/id:',controller.post.edit);
}


getF();
postF();    

module.exports = router;

