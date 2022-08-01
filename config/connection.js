const mongoose = require('mongoose');
const url = 'mongodb+srv://ely:123@info5.exwqa.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(url);

module.exports = mongoose;