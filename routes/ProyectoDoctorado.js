const express = require('express');
const router = express.Router();
const ProyectController= require('../controllers/ProyectoDoctorado')

//CREATe
//Servicio para procesar los datos del formulario
router.post('/CreateProyecto',ProyectController.CreateProyect);

//REAd
//Servicio para consultar todos los datos
router.get('/ReadProyect',ProyectController.ReadProyect);

//delete
//Servicio para eliminar un registro por id
router.post('/DeleteProyect', ProyectController.DeleteProyect);

//update
//Servicio para actualizar las consola
router.post('/UpdateProyect',ProyectController.UpdateProyect);

module.exports = router