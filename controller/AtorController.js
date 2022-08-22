const Ator = require('../models/AtorModel')

class Get{
    abrelist(req,res){
        Ator.find(null).then((ator)=>{
            res.render("ator/list.ejs",{Ator:ator});
        })
    }

    abreedit(req,res){
        Ator.findById(req.params.id).then((ator)=>{
            res.render('ator/list.ejs',{Ator:ator})
        });
    }

    abreadd(req,res){
        res.render('ator/add.ejs');
    }

    deleta(req,res){
        Ator.findByIdAndDelete(req.params.id).then((req,res)=>{
            res.render('ator/list.ejs');
         });
    }
}

class Post{
    add(req,res){
        let model = new Ator();
        model.nome = req.body.nome;
        model.sobrenome = req.body.sobrenome;
        model.data_nascimento = req.body.nascimento;
        model.save();
        res.redirect('/ator/add');
    }

    edit(res,req){
        Ator.findByIdAndUpdate(req.params.id,{
            nome:req.body.nome,
            sobrenome:req.body.sobrenome,
            data_nascimento: req.body.nascimento
        },(err,result)=>{
            if(!err){
                res.redirect('ator/list');
            }
            else{
                res.send('Um erro ocorreu:-->',err);
            }
        }
        )
    }
}

var get = new Get();
var post = new Post();

module.exports = {get,post};