"use strict";

const { DataTypes } = require("sequelize");
const clasesModel = require("./clasesModel");

module.exports = (sequelize) => {
  const attributes = {
    id_requisito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    
    id_clase_requisito: {
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

    descripcion: {
      type: DataTypes.STRING(10),
    },
  };
  const options = {
    defaultScope: {
      attributes: { exclude: [] },
    },
    scopes: {},
    tableName: "requisito",
    timestamps: false,
  };
  return sequelize.define("requisito", attributes, options);
};
