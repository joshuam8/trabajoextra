const Sequelize = require('sequelize');

const Universidad = (sequelize) =>{
    sequelize.define('Universidad',{
        
        nombreUniversidad: Sequelize.STRING,
        paisUniversidad: Sequelize.STRING,
        pagWebUniversidad: Sequelize.STRING

        //VARCHAR?        
    })
}

module.exports = Universidad;

//company-Universidad