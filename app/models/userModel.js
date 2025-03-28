"use strict";

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    userId: {
      type: DataTypes.STRING(13),
      primaryKey: true,
    },
    pass: {
      type: DataTypes.STRING(255),
    },
    RoleId: {
      type: DataTypes.INTEGER,
    },
  };
  const options = {
    defaultScope: {
      attributes: { exclude: ["updatedAt", "createdAt"] },
    },
    scopes: {},
    tableName: "user",
    timestamps: false,
  };
  return sequelize.define("user", attributes, options);
};
