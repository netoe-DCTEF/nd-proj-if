const express = require('express');
const router = express.Router();
const controller = require("../controller/DefaultController");

router.get('/home',controller.get.abrehome);
router.get('/listartodos',controller.get.listarTodos);


module.exports = router;