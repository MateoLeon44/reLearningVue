'use strict'

var controller = {
    datos: (req,res) => 
    {
        var hola = req.body.hola;
    
        return res.status(200).send(
            {
                framework: 'Vue.js',
                autor: 'Mateo León',
                copy: 'Made in Colombia with &hearts',
                hola
            });
    },

    test: (req,res) => 
    {
        return res.status(200).send({
            message: 'Soy la acción test del controlador de artículos'
        });
    }
}; //End de controller


//Exporto para utilizarlo para poder utilizarlo en el archivo de rutas
module.exports = controller;