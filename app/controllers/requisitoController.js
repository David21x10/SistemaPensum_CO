"use strict";

const { where } = require("sequelize");
const db = require("../config/db");
const requisito = db.requisito;

async function getRequisito(req, res) {
    requisito
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
  getRequisito
};