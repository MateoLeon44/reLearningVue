'use strict'

var mongoose = require('mongoose')
//Del export de app.js
var app = require('./app')
//Cualquier port
var port = 3900

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', {useNewUrlParser:true}).then(() => 
{
   console.log("Conexión a MongoDB establecida") 

   //Crear servidor y ponerme a escuchar peticiones http
   app.listen(port,() =>
   {
      console.log('Servidor corriendo en: ' + port);
   });

});