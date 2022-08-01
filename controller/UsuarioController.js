const usuario_model = require('../config/connection.js');

function redirectPaginaInicial(req,res){
    res.redirect('/usuario/home');
}
function abreLogin(req,res){
    res.render('usuario/login.ejs');
}

function abreRegistrar(req,res){    
    res.render('usuario/registrar.ejs');
}

function abreHome(req,res){    
    res.render('usuario/home.ejs');
}

module.exports ={redirectPaginaInicial,abreLogin,abreRegistrar,abreHome};