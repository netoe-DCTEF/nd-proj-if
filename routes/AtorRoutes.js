const controller = require("../controller/AtorController");
const express = require("express");
const router = express.Router();


function router_get(){
    router.get('/list',controller.get.abrelist);
    router.get('/add',controller.get.abreadd);
    router.get('/delete/:id',controller.get.deleta);
    router.get('/edit/:id',controller.get.abreedit);
}
function router_post(){
    router.post('/add',controller.post.add);
    router.post('/edit/:id',controller.post.edit);
}

router_get();
router_post();

module.exports = router;
