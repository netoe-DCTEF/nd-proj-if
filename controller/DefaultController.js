const mongoose = require("mongoose");
const Atores = require("../models/AtorModel");
const Generos = require("../models/GeneroModel");
const Filmes = require("../models/Filmes");

class Get{
    abrehome(req,res){
        res.render('logged/index.ejs');
    }
    listarTodos(req,res){
        Atores.find().then((atores)=>{
            Generos.find().then((generos)=>{
                Filmes.find().then((filmes)=>{
                    res.render('/logged/listall.ejs',{Atores:atores,Generos:generos,Filmes:filmes});
                });
            })
        });
    }
}

var get = new Get();
module.exports = {get};
