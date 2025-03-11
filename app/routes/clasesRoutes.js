'use strict'

const express= require("express");
const clasesController=require("../controllers/clasesController");
const apiRoutes= express.Router();
//const auth= require('../middleware/auth');

apiRoutes.get("/getClases", async (req, res)=> await clasesController.getClases(req,res));

module.exports=apiRoutes;