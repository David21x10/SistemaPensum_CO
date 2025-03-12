"use strict";

const { where } = require("sequelize");
const db = require("../config/db");
const user = db.user;

async function getUser(req, res) {
  user
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
  getUser,
};
