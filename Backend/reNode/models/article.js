//Modelo para aplicación en concreto (BLOG)
//Un modelo es una clase que da un molde para crear diferentes objetos
//utilizando ese modelo

'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Estructura que van a tener los objetos en la DB
var ArticleSchema = Schema({
    titulo: String,
    content: String,
    date: {type: Date, default: Date.now()},
    image: String
});

//Para poder utilizarlo lo exporto
//Nombre de exportar es Article
//El esquema es ArticleSchema
module.exports = mongoose.model('Article', ArticleSchema);
//Mongoose crea articles --> Guarda docs de este tipo y con esta estructura dentro
// de la colección

