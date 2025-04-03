"use strict";

const { where } = require("sequelize");
const db = require("../config/db");
const alumno = db.alumno;

async function getAlumno(req, res) {
  alumno
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

const insertAlumno = async (req, res) => {
  try {
    const { alumnoId, nombre, facultadId, email } = req.body;

    if (!alumnoId || !nombre || !facultadId || email === undefined) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    const existenciaAlumno = await alumno.findOne({
      where: { alumnoId },
    });
    if (existenciaAlumno) {
      return res.status(400).json({ error: "El alumno ya existe" });
    }

    const result = await alumno.create({
      alumnoId,
      nombre,
      facultadId,
      email
    });

    return res
      .status(201)
      .json({ message: "Alumno guardada exitosamente", result });
  } catch (error) {
    console.error("Error al insertar en aprobado:", error);
    return res.status(500).json({ error: error.message });
  }
};

async function getAlumnoId(req, res) {
  try {
    const { alumnoId } = req.query; 

    if (!alumnoId) {
      return res.status(400).json({ message: "Debe proporcionar un alumnoId" });
    }

    const alumnoEncontrado = await alumno.findOne({
      where: { alumnoId }
    });

    if (!alumnoEncontrado) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    res.status(200).json({ alumno: alumnoEncontrado });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
}

module.exports = {
  getAlumno,
  insertAlumno,
  getAlumnoId,
};
