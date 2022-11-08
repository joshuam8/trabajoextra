const path = require("path");
const ProyectoDoctorado = require("../utils/database").models.ProyectoDoctorado;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");

//Create
exports.CreateProyect = (req,res)=>{
    console.log(req.body)
    ProyectoDoctorado.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");//Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Ocurrio un error")//Cliente
        })    
}

//Read
exports.ReadProyect = (req,res)=>{
    //SELECT * from Consola;
    ProyectoDoctorado.findAll()
        .then(ProyectoDoctorado=>{
            console.log("Proyectos",ProyectoDoctorado);
            res.send(ProyectoDoctorado);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

exports.DeleteProyect=(req,res)=>{
    //DELETE FROM Consola WHERE id=
    console.log(req.body)
    ProyectoDoctorado.destroy({
        where:{
            id : req.body.id
        }
    }).then(()=>{
        console.log("Proyect eliminada")
        res.send("Proyecto eliminada")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

exports.UpdateProyect=(req,res)=>{
    //UPDATE Consola SET WHERE id=
    console.log(req.body)
    ProyectoDoctorado.update({tema: req.body.tema},{
        where:{
            id: req.body.id
        }
    }).then(()=>{
        console.log("tema actualizada")
        res.send("tema actualiza")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

/* pa que sirve? no tiene ruta
exports.getConsultaConsola = (req,res)=>{
    res.send('<h1>Datos de las consolas</h1>')
}
*/
