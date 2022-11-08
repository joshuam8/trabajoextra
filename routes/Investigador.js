const express = require('express');
const router = express.Router();
const InvestigadorController= require('../controllers/Investigador')

//CREATe
//Servicio para procesar los datos del formulario
router.post('/CreateInvestigador',InvestigadorController.CreateInvestigador);

//REAd
//Servicio para consultar todos los datos
router.get('/ReadInvestigador',InvestigadorController.ReadInvestigador);

//delete
//Servicio para eliminar un registro por id
router.post('/DeleteInvestigador', InvestigadorController.DeleteInvestigador);

//update
//Servicio para actualizar las consola
router.post('/UpdateInvestigador',InvestigadorController.UpdateInvestigador);

module.exports = router