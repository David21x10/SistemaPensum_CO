"use strict";

const express = require("express");
const cors = require("cors");
const App = express();

//llamado a routers
const alumnoRoutes = require("./routes/alumnoRoutes");
const userRoutes = require("./routes/userRoutes");
const clasesRoutes = require("./routes/clasesRoutes");
const aprobadoRoutes = require("./routes/aprobadoRoutes");
const carrera_clase_bloqueRoutes = require("./routes/carrera_clase_bloqueRoutes");
const requisitoRoutes = require("./routes/requisitoRoutes");

App.use(
  cors({
    origin: "*", // Reemplaza con el dominio correcto
  })
);

App.use(cors());
App.use(express.json({ limit: "10mb" }));
App.use(express.urlencoded({ extended: false }));

//creacion de endpoints
App.use("/api/Alumno", alumnoRoutes);
App.use("/api/User", userRoutes);
App.use("/api/Clases", clasesRoutes);
App.use("/api/Aprobado", aprobadoRoutes);
App.use("/api/CarreraCM", carrera_clase_bloqueRoutes);
App.use("/api/Requisito", requisitoRoutes);

module.exports = App;
