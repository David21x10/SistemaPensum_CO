'use strict'

const express= require('express');
const cors= require('cors');
const App = express();

//llamado a routers
const alumnoRoutes=require("./routes/alumnoRoutes");
const userRoutes=require("./routes/userRoutes");
const clasesRoutes=require("./routes/clasesRoutes");

App.use(
    cors({
        origin: "*", // Reemplaza con el dominio correcto
    })
);

App.use(cors())
App.use(express.json({limit: '10mb'}));
App.use(express.urlencoded({extended: false}));

//creacion de endpoints
App.use("/api/Alumno", alumnoRoutes);
App.use("/api/User", userRoutes);
App.use("/api/Clases", clasesRoutes);

module.exports= App;
