const express = require('express');
const router = express.Router();
const controller = require('../controller/FilmeController');

router.get('/add',controller.get.abreadd);
router.get('/list',controller.get.abrelist);

router.post('/add',controller.post.add);

module.exports = router;
