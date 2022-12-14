const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const usuario_routes = require('./routes/UsuarioRoutes');
const genero_routes = require('./routes/GeneroRoutes');
const default_routes = require('./routes/DefaultRoutes');
const ator_routes = require('./routes/AtorRoutes');
const filme_routes = require('./routes/FilmeRoutes');
const passport = require("./config/passport");
var session = require("express-session");
var autenticacao = require("./config/autenticacao");

function log_listen(){
    console.log('Rodando na porta:',port);
}

function def_appUse(){
  app.use(express.urlencoded({extended:true}));
    app.use(
      session({
        secret: "5info",
        resave: false,
        saveUninitialized: false,
      })
    );
    app.use(passport.authenticate("session"));
    app.use(
      express.static(path.join(__dirname,'/public'))
    );
    app.use('/usuario',usuario_routes);
    app.use('/genero',genero_routes);
    app.use('/logged',autenticacao,default_routes);
    app.use('/filme',filme_routes);
    app.use('/ator',ator_routes);
}

function def_appSet(){
    app.set('view engine','ejs');
}

function renderHome(){

    app.get('/',(req,res)=>{
        res.render('usuario/login.ejs');
    })
}

def_appUse();
def_appSet();
app.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/logged/home",
    failureRedirect: "/",
  })
);
renderHome();







app.listen(port,log_listen());
