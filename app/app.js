'use strict'

const express= require('express');
const cors= require('cors');
const App = express();

//llamado a routers

App.use(
    cors({
        origin: "*", // Reemplaza con el dominio correcto
    })
);

App.use(cors())
App.use(express.json({limit: '10mb'}));
App.use(express.urlencoded({extended: false}));

//creacion de endpoints

module.exports= App;
