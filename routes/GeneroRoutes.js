const express = require('express');
const router = express.Router();
const controller = require('../controller/GeneroController');

function getF(){
    router.get('/add',controller.get.abreaadd);
    router.get('/home',controller.get.abrehome);
}

function postF(){
    router.post('/add',controller.post.add);
}


getF();
postF();    

module.exports = router;

