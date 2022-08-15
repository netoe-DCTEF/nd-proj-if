class Get{
    abrehome(req,res){
        res.render('logged/index.ejs');
    }
}

var get = new Get();

module.exports = {get};
