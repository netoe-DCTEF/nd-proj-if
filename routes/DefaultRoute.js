const express = require('express');
const router = express.Router();
const controller = require("../controller/DefaultController");

router.get('/home',controller.get.abrehome);


module.exports = router;