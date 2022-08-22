const AtorModel = require('../models/AtorModel');
const Ator = require('../models/AtorModel');

class Get{
    abrelist(req,res){
        res.render('ator/list.ejs');
    }

    abreedit(req,res){
        res.render('ator/edit.ejs');
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
    add(res,req){
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

let get = new Get();
let post = new Post();

module.exports = {get,post};