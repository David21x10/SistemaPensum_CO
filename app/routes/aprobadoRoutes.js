'use strict'

const express= require("express");
const aprobadoController=require("../controllers/aprobadoController");
const apiRoutes= express.Router();
//const auth= require('../middleware/auth');

apiRoutes.get("/getAprobado", async (req, res)=> await aprobadoController.getAprobado(req,res)).
post("/insertAprobado", async (req, res)=> await aprobadoController.insertAprobado(req,res)).
delete("/deleteAprobado", async (req, res)=> await aprobadoController.deleteAprobado(req,res)).
put("/updateAprobado", async (req, res)=> await aprobadoController.updateAprobado(req,res)).
get("/getAprobadoAlumno", async (req, res)=> await aprobadoController.getAprobadoAlumno(req,res));




module.exports=apiRoutes;