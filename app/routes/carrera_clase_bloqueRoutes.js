'use strict'

const express= require("express");
const CarreraCMController=require("../controllers/carrera_clase_bloqueController");
const apiRoutes= express.Router();
//const auth= require('../middleware/auth');

apiRoutes.get("/getCarreraCM", async (req, res)=> await CarreraCMController.getCarreraCM(req,res));

module.exports=apiRoutes;