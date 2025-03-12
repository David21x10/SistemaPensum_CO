"use strict";

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    alumnoId: {
      type: DataTypes.STRING(13),
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
    },
    facultadId: {
      type: DataTypes.STRING(10),
    },
    email: {
      type: DataTypes.STRING(50),
    },
    estadoAlumno: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
  };
  const options = {
    defaultScope: {
      attributes: { exclude: ["updatedAt", "createdAt"] },
    },
    scopes: {},
    tableName: "alumno",
    timestamps: false,
  };
  return sequelize.define("alumno", attributes, options);
};
