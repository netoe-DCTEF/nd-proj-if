const Model = require('../models/GeneroModel');

class Get{
    abreaadd(req,res){
        res.render('genero/add.ejs');
        return;
    }
};

class Post{
    add(req,res){
        var genero_novo = new Model();
        genero_novo.genero = req.body.nome;
        genero_novo.keywords = req.body.keywords;
    }

};


var get = new Get();
var post = new Post();

module.exports = {get,post};