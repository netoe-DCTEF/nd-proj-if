const Filme = require('../models/FilmeModel');
const Genero = require('../models/GeneroModel');
const Atores = require('../models/AtorModel');

class Get{
    abreadd(req,res){
        Filme.find(null).then((filme)=>{
        })
    }
}

class Post{
    add(req,res){
        var filme = new Filme();
    }
}