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

const insertUser = async (req, res) => {
  try {
    const { UserId, pass, RoleId } = req.body;

    if (!UserId || !pass || !RoleId === undefined) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    const existenciaUser = await user.findOne({
      where: { UserId },
    });
    if (existenciaUser) {
      return res.status(400).json({ message: "El usuario ya está registrado" });
    }

    const result = await user.create({
      UserId,
      pass,
      RoleId,
    });

    return res
      .status(201)
      .json({ message: "Usuario registrado con éxito", result });
  } catch (error) {
    console.error("Error al insertar en el usuario:", error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { UserId } = req.body;

    if (!UserId) {
      return res.status(400).json({ error: "El id del usuario es requerido" });
    }

    const userRemove = await user.findByPk(UserId);

    if (userRemove) {
      await userRemove.destroy();
      return res
        .status(200)
        .json({ message: "Usuario eliminado de forma exitosa" });
    } else {
      return res.status(404).json({ error: "El usuario no fue encontrado" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { UserId, pass, RoleId } = req.body;

    if (!UserId) {
      return res
        .status(400)
        .json({ error: "Se necesita el identificador del usuario" });
    }

    const userUpdate = await user.findByPk(UserId);

    if (!userUpdate) {
      return res.status(404).json({ error: "El user no fue encontrado" });
    }

    if (req.body.newIduser) {
      userUpdate.UserId = req.body.newIduser;
    }
    await userUpdate.update({
      pass: pass || userUpdate.pass,
      RoleId: RoleId || userUpdate.RoleId,
    });

    return res.status(200).json({
      message: "Usuario actualizado exitosamente",
      user: userUpdate,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  insertUser,
  deleteUser,
  updateUser,
};
