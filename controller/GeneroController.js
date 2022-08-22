const Model = require('../models/GeneroModel');

class Get{
    abreaadd(req,res){
        res.render('genero/add.ejs');
        return;
    }
    abreedit(req,res){
        Model.findById(req.params.id).then((model)=>{
            res.render('genero/edit.ejs',{Model:model});
        });
    }
    abrelist(req,res){
        Model.find({}).then((model)=>{
            res.render('genero/list.ejs',{Model:model});
        });
    } 
    deleta(req,res){
        Model.findByIdAndDelete(req.params.id).then(()=>{
            res.render('genero/list.ejs');
        })        
    }
};

class Post{
    add(req,res){
        var genero_novo = new Model();
        genero_novo.genero = req.body.nome;
        genero_novo.keywords = req.body.keywords;
        genero_novo.save();
        res.redirect('/genero/list');
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