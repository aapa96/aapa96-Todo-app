var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TodoSchema = Schema({
    name: String,
    note: String
})


module.exports = mongoose.model('Todo',TodoSchema);