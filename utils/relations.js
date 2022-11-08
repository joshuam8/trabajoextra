

function applyRelations(sequelize){
    console.log(sequelize.models);
    const Universidad = sequelize.models.Universidad;
    const ProyectoDoctorado = sequelize.models.ProyectoDoctorado;
    const Investigador= sequelize.models.Investigador;

    //Compañia puede desarrollar varios videojuegos
    Universidad.hasMany(Investigador);
    Investigador.belongsTo(Universidad);

    Investigador.hasMany(ProyectoDoctorado);
    ProyectoDoctorado.belongsTo(Investigador);


  
}
module.exports = {applyRelations};