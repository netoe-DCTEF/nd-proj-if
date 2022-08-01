const mongoose = require('../config/connection.js');

const GeneroSchema = mongoose.Schema({
    genero:{type:'String'},
    keywords:{type:'String'}
});

module.exports = mongoose.model('Genero',GeneroSchema);
