const path = require("path");
const Investigador = require("../utils/database").models.Investigador;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");


//Create
exports.CreateInvestigador = (req,res)=>{
    console.log(req.body)
    //INSERT INTO Consola VALUES ()
    Investigador.create(req.body)
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
exports.ReadInvestigador = (req,res)=>{
    //SELECT * from Consola;
    Investigador.findAll()
        .then(Investigador=>{
            console.log("Investigadores",Investigador);
            res.send(Investigador);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

exports.DeleteInvestigador=(req,res)=>{
    //DELETE FROM Consola WHERE id=
    console.log(req.body)
    Investigador.destroy({
        where:{
            id : req.body.id
        }
    }).then(()=>{
        console.log("Investigador eliminada")
        res.send("Investigador eliminada")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

exports.UpdateInvestigador=(req,res)=>{
    //UPDATE Consola SET WHERE id=
    console.log(req.body)
    Investigador.update({departamento: req.body.departamento},{
        where:{
            id: req.body.id
        }
    }).then(()=>{
        console.log("departamento  actualizada")
        res.send("departamento actualiza")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}