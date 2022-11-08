const Sequelize = require('sequelize');
//const Investigador = require('./Investigador');

const ProyectoDoctorado = (sequelize) =>{
    sequelize.define('ProyectoDoctorado',{
        areas: Sequelize.STRING,
        duracion: Sequelize.INTEGER,
        tema: Sequelize.STRING,
        descripcion: Sequelize.STRING,
        investigador_idinvestigador: Sequelize.INTEGER 
    })
}

module.exports = ProyectoDoctorado;
//consola-ProyectoDoctorado