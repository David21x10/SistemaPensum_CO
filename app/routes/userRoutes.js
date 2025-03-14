"use strict";

const express = require("express");
const userController = require("../controllers/userController");
const apiRoutes = express.Router();
//const auth= require('../middleware/auth');

apiRoutes.get("/getUser",async (req, res) => await userController.getUser(req, res))
.post("/insertUser",async (req, res) => await userController.insertUser(req, res))
.delete("/deleteUser",async (req, res) => await userController.deleteUser(req, res))
.put("/updateUser",async (req, res) => await userController.updateUser(req, res));

module.exports = apiRoutes;
