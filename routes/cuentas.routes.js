const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentas.controller');

router.get('/', cuentasController.getCuentaByQuery);


router.get('/:id', cuentasController.getCuentaById);


router.get('/extra/balance', cuentasController.getCuentasBalance);

module.exports = router;
