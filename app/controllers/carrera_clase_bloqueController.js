"use strict";

const { where } = require("sequelize");
const db = require("../config/db");
const carreraCM = db.carrera_clase_bloque;

async function getCarreraCM(req, res) {
  carreraCM
    .findAll()
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: error.message || "sucedió un errror inesperado" });
    });
}


module.exports = {
  getCarreraCM
};