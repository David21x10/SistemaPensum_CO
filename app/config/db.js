'use strict'

const { reject } = require('lodash');
const Sequelize =require('sequelize')
require('dotenv').config()
const fs = require ('fs')

const sequelizeInstance = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        port: process.env.MY_SQL_PORT,
        dialectOptions: {  
            connectTimeout: 100000,
            ssl: {
                require: true, 
                rejectUnauthorized: false, 
                ca: fs.readFileSync('./ca.pem').toString(),
            }
        },
        pool: {
            max: parseInt(process.env.POOL_MAX),
            min: parseInt(process.env.POOL_MIN),
            acquire: parseInt(process.env.POOL_ACQUIRE),
            idle: parseInt(process.env.POOL_IDLE),
        }
    }
);

    const db={};
    db.Sequelize= Sequelize;
    db.sequelizeInstance= sequelizeInstance;

    db.alumno= require('../models/alumnoModel')(sequelizeInstance, Sequelize);
    db.user= require('../models/userModel')(sequelizeInstance, Sequelize);
    db.clases= require('../models/clasesModel')(sequelizeInstance, Sequelize);
    db.aprobado= require('../models/aprobadoModel')(sequelizeInstance, Sequelize);

    module.exports=db;
    