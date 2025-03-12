"use strict";

const express = require("express");
const userController = require("../controllers/userController");
const apiRoutes = express.Router();
//const auth= require('../middleware/auth');

apiRoutes.get("/getUser",async (req, res) => await userController.getUser(req, res));

module.exports = apiRoutes;
