const mongoose = require('../config/connection.js');

const UsuarioSchema = mongoose.Schema({
    nome:{type:'String'},
    nickname:{type:'String'},
    email:{type:'String'},
    senha:{type:'String'},
    ultimoLogin:{type:'Date'}
});

module.exports = mongoose.model('Usuario',UsuarioSchema);
