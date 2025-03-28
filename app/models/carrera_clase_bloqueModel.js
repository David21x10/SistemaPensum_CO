"use strict";

const { DataTypes } = require("sequelize");
const clasesModel = require("./clasesModel");

module.exports = (sequelize) => {
  const attributes = {
    id_ccb: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    
    facultadId: {
      allowNull: false,
      type: DataTypes.STRING(10),
    },

    id_clase: {
      type: DataTypes.STRING(10),
      references: {
        model: clasesModel,
        key: "id_clase",
      },
    },
    id_bloque: {
      type: DataTypes.INTEGER,
    },
  };
  const options = {
    defaultScope: {
      attributes: { exclude: [] },
    },
    scopes: {},
    tableName: "carrera_clase_bloque",
    timestamps: false,
  };
  return sequelize.define("carrera_clase_bloque", attributes, options);
};
