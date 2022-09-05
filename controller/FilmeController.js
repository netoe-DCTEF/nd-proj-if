const Filme = require('../models/FilmeModel');
const Genero = require('../models/GeneroModel');
const Atores = require('../models/AtorModel');

class Get{
    abreadd(req,res){
        Genero.find({}).then((generos)=>{
            Atores.find({}).then((atores)=>{
                res.render('filme/add.ejs',{Genero:generos,Atores:atores});
            });
        });
    }
    abrelist(req,res){
        Filme.find({}).then((filmes)=>{
            res.render('filme/list.ejs',{Filme:filmes});
        });
    }
}

class Post{
    add(req,res){
        var filme = new Filme();
        filme.nome = req.body.nome;
        filme.ano = req.body.ano;
        filme.genero = req.body.genero;
        filme.atores = req.body.atores;

        filme.save();
        res.redirect('/filme/list');
    }
}

let get = new Get();
let post = new Post();

module.exports = {get,post};