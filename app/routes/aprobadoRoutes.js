'use strict'

const express= require("express");
const aprobadoController=require("../controllers/aprobadoController");
const apiRoutes= express.Router();
//const auth= require('../middleware/auth');

apiRoutes.get("/getAprobado", async (req, res)=> await aprobadoController.getAprobado(req,res));

module.exports=apiRoutes;