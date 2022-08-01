const mongoose = require('../config/connection.js');

const AtorSchema = mongoose.Schema({
    nome:{type:'String'},
    sobrenome:{type:'String'},
    data_nascimento:{type:'Date'},
    filmes:[{type:mongoose.Schema.Types.ObjectId, ref:'Filme'}]
});

module.exports = mongoose.model('Ator',AtorSchema);
