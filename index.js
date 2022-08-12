const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const usuario_routes = require('./routes/UsuarioRoutes.js');
const passport = require("./config/passport");
var session = require("express-session");
var autenticacao = require("./config/autenticacao");

app.use(
  session({
    secret: "5info",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));

function log_listen(){
    console.log('Rodando na porta:',port);
}

function def_appUse(){
    app.use(
        express.static(path.join(__dirname,'/public'))
    );
    app.use('/usuario',usuario_routes);
    app.use(express.urlencoded({extended:true}));
}

function def_appSet(){
    app.set('view engine','ejs');
}

function redirectHome(){

    app.get('/',(req,res)=>{
        res.render('./usuario/login.ejs');
    })
}

app.post(
    "/",
    passport.authenticate("local", {
      successRedirect: "/usuario/list",
      failureRedirect: "/",
    })
  );

def_appUse();
def_appSet();
redirectHome();






app.listen(port,log_listen());