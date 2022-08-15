const Model= require('../models/UsuarioModel.js');

class Get{
    abreRegistrar(req,res){    
        res.render('usuario/registrar.ejs');
    }
    
}
class Post{
    addUsuario(req,res){
        let usuario = new Model();
        usuario.nome = req.body.nome;
        usuario.nickname = req.body.nickname;
        usuario.email = req.body.email;
        usuario.senha = req.body.senha;

        usuario.save(function (err, result) {
            if (err) {
              res.send("Aconteceu o seguinte erro: " + err);
            } else {
              res.redirect('/usuario/add');
            }
          });
        return;
    }
}
var get = new Get();
var post = new Post();

module.exports = {get,post};
