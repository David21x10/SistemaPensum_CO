"use strict";

const { DataTypes } = require("sequelize");
const alumnoModel = require("./alumnoModel");
const clasesModel = require("./clasesModel");

module.exports = (sequelize) => {
  const attributes = {
    id_aprobado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    alumnoId: {
      allowNull: false,
      type: DataTypes.STRING(13),
      references: {
        model: alumnoModel,
        key: "alumnoId",
      },
    },
    id_clase: {
      type: DataTypes.STRING(10),
      references: {
        model: clasesModel,
        key: "id_clase",
      },
    },
    nota_final: {
      type: DataTypes.DECIMAL(5, 2),
    },
  };
  const options = {
    defaultScope: {
      attributes: { exclude: [] },
    },
    scopes: {},
    tableName: "aprobado",
    timestamps: false,
  };
  return sequelize.define("aprobado", attributes, options);
};
