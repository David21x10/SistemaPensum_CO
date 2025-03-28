'use strict'

const express= require("express");
const requisitoController=require("../controllers/requisitoController");
const apiRoutes= express.Router();
//const auth= require('../middleware/auth');

apiRoutes.get("/getRequisito", async (req, res)=> await requisitoController.getRequisito(req,res));

module.exports=apiRoutes;