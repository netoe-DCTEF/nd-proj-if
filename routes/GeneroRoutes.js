const express = require('express');
const router = express.Router();
const controller = require('../controller/GeneroController');

function getF(){
    router.get('/add',controller.get.abreaadd);
}

function postF(){
    router.post('/add',controller.post.add);
}


getF();
postF();    

module.exports = router;

