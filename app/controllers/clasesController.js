'use strict'

const { where } = require('sequelize');
const db = require('../config/db');
const  clases= db.clases;

async function getClases(req, res){
clases.findAll()
.then(result=>{
res.status(200).send({result})
}).catch(error=> {
    res.status(500).send({message:error.message || "sucedió un errror inesperado"})
});
}

module.exports={
    getClases,

}