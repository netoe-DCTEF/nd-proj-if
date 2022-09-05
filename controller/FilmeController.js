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
        Filme.find({}).populate('genero').populate('atores').then((filmes)=>{
            res.render('filme/list.ejs',{Filme:filmes});
        });
    }
    abreedit(req,res){
        Filme.findById(req.params.id).then((filme)=>{
            Genero.find({}).then((generos)=>{
                Atores.find({}).then((atores)=>{
                    res.render('filme/edit.ejs',{Genero:generos,Atores:atores,Filme:filme});
                });
            });
        });
    }
    deleta(req,res){
        var i;
        let filmes;
        Filme.findByIdAndDelete(req.params.id).populate('atores').then((filme)=>{
            console.log(filme);
            filme.atores.forEach( (ator)=> {
                Atores.findById(ator._id).then((ator1)=>{
                    ator1.filmes = ator1.filmes.filter((item)=>{
                        item != filme._id;
                    })
                })
            });
        });
        res.redirect('/filme/list');
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
    edit(req,res){
        Filme.findByIdAndUpdate(req.params.id).then(()=>{
            res.redirect('/filme/list');
        });
    }
}

let get = new Get();
let post = new Post();

module.exports = {get,post};