'use strict'

const express= require("express");
const alumnoController=require("../controllers/alumnoController");
const apiRoutes= express.Router();
const auth= require('../middlewares/auth');

apiRoutes.get("/getAlumno", async (req, res)=> await alumnoController.getAlumno(req,res));

module.exports=apiRoutes;