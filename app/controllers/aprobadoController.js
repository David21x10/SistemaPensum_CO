"use strict";

const { where } = require("sequelize");
const db = require("../config/db");
const aprobado = db.aprobado;

async function getAprobado(req, res) {
  aprobado
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

const insertAprobado = async (req, res) => {
  try {
    const { id_aprobado, alumnoId, id_clase, nota_final } = req.body;

    if (!id_aprobado || !alumnoId || !id_clase || nota_final === undefined) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    const existenciaAprobado = await aprobado.findOne({
      where: { id_aprobado },
    });
    if (existenciaAprobado) {
      return res.status(400).json({ message: "La clase ya está aprobada" });
    }

    const result = await aprobado.create({
      id_aprobado,
      alumnoId,
      id_clase,
      nota_final,
    });

    return res
      .status(201)
      .json({ message: "Clase guardada exitosamente", result });
  } catch (error) {
    console.error("Error al insertar en aprobado:", error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteAprobado = async (req, res) => {
  try {
    const { id_aprobado } = req.body;

    if (!id_aprobado) {
      return res.status(400).json({ error: "El idaprobado es requerido" });
    }

    const aprobadoRemove = await aprobado.findByPk(id_aprobado);

    if (aprobadoRemove) {
      await aprobadoRemove.destroy();
      return res
        .status(200)
        .json({ message: "Clase aprobada eliminada de forma exitosa" });
    } else {
      return res
        .status(404)
        .json({ error: "La clase aprobada no fue encontrada" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const updateAprobado = async (req, res) => {
  try {
    const { id_aprobado, alumnoId, id_clase, nota_final } = req.body;

    if (!id_aprobado) {
      return res
        .status(400)
        .json({ error: "Se necesita el identificador de la clase aprobada" });
    }

    const aprobadoUpdate = await aprobado.findByPk(id_aprobado);

    if (!aprobadoUpdate) {
      return res
        .status(404)
        .json({ error: "La clase aprobada no fue encontrada" });
    }

    if (req.body.newIdaprobado) {
      aprobadoUpdate.id_aprobado = req.body.newIdaprobado;
    }
    await aprobadoUpdate.update({
      alumnoId: alumnoId || aprobadoUpdate.alumnoId,
      id_clase: id_clase || aprobadoUpdate.id_clase,
      nota_final: nota_final || aprobadoUpdate.nota_final,
    });

    return res
      .status(200)
      .json({
        message: "clase aprobada actualizada exitosamente",
        aprobado: aprobadoUpdate,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAprobado,
  insertAprobado,
  deleteAprobado,
  updateAprobado
};
