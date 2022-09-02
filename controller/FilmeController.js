const Filme = require('../models/FilmeModel');
const Genero = require('../models/GeneroModel');
const Atores = require('../models/AtorModel');

class Get{
    abreadd(req,res){
        Genero.find(NULL).then((generos)=>{
            Atores.find(NULL).then((atores)=>{
                res.render('/filme/add.ejs',{Genero:generos,Atores:atores});
            });
        });
    }
}

class Post{
    add(req,res){
        var filme = new Filme();
        
    }
}