const usuario_model = require('../models/UsuarioModel.js');

class Methods_get{
    redirectPaginaInicial(req,res){
        res.redirect('/usuario/home');
    }    
    abreRegistrar(req,res){    
        res.render('usuario/registrar.ejs');
    }
    
}
class Methods_post{
    addUsuario(req,res){
        let usuario = new usuario_model();
        usuario.nome = req.body.nome;
        usuario.nickname = req.body.nickname;
        usuario.email = req.body.email;
        usuario.senha = req.body.senha;
        usuario.save(function (err, result) {
            if (err) {
              res.send("Aconteceu o seguinte erro: " + err);
            } else {
              res.redirect("/usuario/list");
            }
          });
        return;
    }
}
var methods_get = new Methods_get();
var methods_post = new Methods_post();
module.exports = {methods_get,methods_post};
