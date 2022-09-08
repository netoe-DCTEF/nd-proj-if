const mongoose = require("mongoose");
const Atores = require("../models/AtorModel");
const Generos = require("../models/GeneroModel");
const Filmes = require("../models/FilmeModel");

class Get{
    abrehome(req,res){
        res.render('logged/index.ejs');
    }
}

var get = new Get();
module.exports = {get};
