const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const usuario_routes = require('./routes/UsuarioRoutes');
const genero_routes = require('./routes/GeneroRoutes');
const passport = require("./config/passport");
const bodyParser = require('body-parser');
var session = require("express-session");
var autenticacao = require("./config/autenticacao");

function log_listen(){
    console.log('Rodando na porta:',port);
}

function def_appUse(){
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
    app.use('/genero',autenticacao,genero_routes);
    app.use(bodyParser.urlencoded({extended:true}));
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
    successRedirect: "/usuario/list",
    failureRedirect: "/",
  })
);
renderHome();







app.listen(port,log_listen());
