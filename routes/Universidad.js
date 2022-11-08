const express = require('express');
const router = express.Router();
const UniversidadController= require('../controllers/Universidad')


//CREATe
//Servicio para procesar los datos del formulario
router.post('/CreateUniversidad',UniversidadController.CreateUniversidad);

//REAd
//Servicio para consultar todos los datos
router.get('/ReadUniversidad',UniversidadController.ReadUniversidad);

//delete
//Servicio para eliminar un registro por id
router.post('/DeleteUniversidad', UniversidadController.DeleteUniversidad);

//update
//Servicio para actualizar las consola
router.post('/UpdateUniversidad',UniversidadController.UpdateUniversidad);

module.exports = router