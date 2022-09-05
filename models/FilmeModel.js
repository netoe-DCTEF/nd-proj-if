const mongoose = require('../config/connection.js');

const FilmeSchema = mongoose.Schema({
    nome:{type:'String'},
    ano:{type:'Date'},
    genero:{type:mongoose.Schema.Types.ObjectId, ref:'Genero'},
    atores:[{type:mongoose.Schema.Types.ObjectId, ref:'Ator'}]
});

module.exports = mongoose.model('Filme',FilmeSchema);
