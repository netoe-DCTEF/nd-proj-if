const express = require('express');
const router = express.Router();
const controller = require('../controller/FilmeController');

router.get('/add',controller.get.abreadd);
router.get('/list',controller.get.abrelist);
router.get('/edit/:id',controller.get.abreedit);
router.get('/deleta/:id',controller.get.deleta)

router.post('/add',controller.post.add);
router.post('/edit/:id',controller.post.edit);


module.exports = router;
