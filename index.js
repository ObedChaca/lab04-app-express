var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_cliente);
app.get('/productos',c_productos);

function c_inicio(req,res){
    res.send('<h1>App Express - INICIO</h1>')
}

function c_cliente(req,res){
    res.send('<p>Obed <br>Joel <br>Pepe <br>Carlos</p>')
}

function c_productos(req,res){
    res.send('<p>Camara Reflex <br>Camaras Mirrorless <br>Camaras Filmadoras <br>Camaras digitales</p>')
}

function c_server(req,res){
    console.log('port:5000')
}

var server = app.listen(5000,c_server);