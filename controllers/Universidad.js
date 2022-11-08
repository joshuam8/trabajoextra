const path = require("path");
const Universidad = require("../utils/database").models.Universidad;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");


//Create
exports.CreateUniversidad = (req,res)=>{
    console.log(req.body)
    //INSERT INTO Consola VALUES ()
    Universidad.create(req.body)
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
exports.ReadUniversidad = (req,res)=>{
    //SELECT * from Consola;
    Universidad.findAll()
        .then(Universidad=>{
            console.log("Universidades",Universidad);
            res.send(Universidad);
        })
        .catch(e=>{
            console.log(e);
            res.send("ok");
        })
}

exports.DeleteUniversidad=(req,res)=>{
    //DELETE FROM Consola WHERE id=
    console.log(req.body)
    Universidad.destroy({
        where:{
            id : req.body.id
        }
    }).then(()=>{
        console.log("Universidad eliminada")
        res.send("Universidad eliminada")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

exports.UpdateUniversidad=(req,res)=>{
    //UPDATE Consola SET WHERE id=
    console.log(req.body)
    Universidad.update({paisUniversidad: req.body.paisUniversidad},{
        where:{
            id: req.body.id
        }
    }).then(()=>{
        console.log("pais actualizada")
        res.send("pais actualiza")
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