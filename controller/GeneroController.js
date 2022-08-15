const Model = require('../models/GeneroModel');

class Get{
    abreaadd(req,res){
        res.render('genero/add.ejs');
        return;
    }
    abreedit(req,res){
        Model.findById(req.params.id).then((genero)=>{
            res.render('/genero/edit.ejs',{Model:genero,Login:req.user});
        });
    }
    abrelist(req,res){
        res.render('/genero/list',{Model:model})
    } 
    deleta(req,res){
        Model.findByIdAndDelete(req.params.id).then(()=>{
            res.render('/usuario/list.ejs');
        })
    }
};

class Post{
    add(req,res){
        var genero_novo = new Model();
        genero_novo.genero = req.body.nome;
        genero_novo.keywords = req.body.keywords;
    }
    edit(req,res){
        Model.findByIdAndUpdate(req.params.id,{
            genero:req.body.nome,
            keywords:req.body.keywords
        },
        (err,result)=>{
            if(err){
                res.send('Algo deu errado.->' + err);
            }
            else{   
                res.redirect('/logged/home');
            }
        }
        )
    }

};


var get = new Get();
var post = new Post();

module.exports = {get,post};