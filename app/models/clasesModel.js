'use strict'

const {DataTypes}= require('sequelize');

module.exports=(sequelize)=>{
    const attributes ={
        id_clase: {
            type: DataTypes.STRING(10),
            primaryKey: true
        },
        nombre_clase: {
            type: DataTypes.STRING(100)
        },
        creditos: {
            type: DataTypes.INTEGER
        },
        estado:{
            type : DataTypes.BOOLEAN,  
            allowNull: true
        },
        TipoClase:{
            type: DataTypes.INTEGER
        }
    }
    const options={
        defaultScope: {
            attributes:{ exclude: [ 'updatedAt', 'createdAt']}
        },
        scopes:{},
        tableName: 'clases',
        timestamps: false
    }
    return sequelize.define('clases', attributes, options);
}