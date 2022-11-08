const Sequelize = require('sequelize');

const Investigador = (sequelize) =>{
    sequelize.define('Investigador',{
        departamento: Sequelize.STRING,
        nombre: Sequelize.STRING,
        universidad_iduniversidad:Sequelize.INTEGER //foranea
    })
}

module.exports = Investigador;
//consolavideouego-investigador