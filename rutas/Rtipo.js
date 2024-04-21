const express = require('express');
const router = express.Router();
const Contipo = require('../controladores/Contipo');

router.get('/', Contipo.tipoById);
router.post('/:id', Contipo.createTipo);
router.get('/', Contipo.getAllTipo);
router.patch('/:id',Contipo.upData);
router.delete('/:id',Contipo.delData);

module.exports = router;