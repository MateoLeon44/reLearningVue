'use strict'

//Imports
var express = require('express');
var bodyParser = require('body-parser');

//Lo que se va a exportar
//Ejecutar express(http)
var app = express();

//cargar ficheros rutas
var article_routes = require('./routes/article');


//Middlewares
//Cargar el body parser
app.use(bodyParser.urlencoded({extended:false}));
//convertir lo que me llegue a json
app.use(bodyParser.json());

//CORS

//Añadir prefijos para rutas/ Cargar rutas
app.use('/articulo', article_routes)


//Exportar modulo (fichero actual)
//Poder utilizarlo en otras partes
module.exports = app;

//Ruta o método de prueba
app.get('/probando', (req,res) => 
{
    //Devuelvo código de http si la respuesta es 200
    return res.status(200).send(
        {
            framework: 'Vue.js',
            autor: 'Mateo León',
            copy: 'Made in Colombia with &hearts'
        });
});

