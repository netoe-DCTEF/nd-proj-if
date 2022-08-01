const usuario_model = require('../models/UsuarioModel.js');

class Methods_get{
    redirectPaginaInicial(req,res){
        res.redirect('/usuario/home');
    }
    abreLogin(req,res){
        res.render('usuario/login.ejs');
    }
    
    abreRegistrar(req,res){    
        res.render('usuario/registrar.ejs');
    }
    
    abreHome(req,res){    
        res.render('usuario/home.ejs');
    }
}
class Methods_post{
    addUsuario(req,res){
        if(req.params.senha !== req.params.senhaRedigitada){
            res.send('Usuario não encontrado').then(res.redirect('/usuario/registrar'));
            return;
        }
        let usuario = new usuario_model();
        usuario.nome = req.body.nome;
        usuario.nickname = req.body.nickname;
        usuario.email = req.body.email;
        usuario.senha = req.body.senha;
        usuario.save(function (err, result) {
            if (err) {
              res.send("Aconteceu o seguinte erro: " + err);
            } else {
              res.redirect("/usuario/lst");
            }
          });
        return;
    }
    
}
var methods_get = new Methods_get();
var methods_post = new Methods_post();
module.exports = {methods_get,methods_post};
