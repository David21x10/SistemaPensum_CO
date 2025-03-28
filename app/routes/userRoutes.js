"use strict";

const express = require("express");
const userController = require("../controllers/userController");
const apiRoutes = express.Router();
//const auth= require('../middleware/auth');

apiRoutes.post('/signup', async (req, res)=> await userController.signUp(req, res))
.post('/signin', async (req, res)=> await userController.signIn(req, res));


module.exports = apiRoutes;
