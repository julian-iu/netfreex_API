const express = require('express');
const router = express.Router();
const Congenero = require('../controladores/Congenero');

router.get('/', Congenero.generoById);
router.get('/:id', Congenero.getAllGeneros);
router.post('/', Congenero.newGenero);
router.patch('/:id', Congenero.upDataG);
router.delete('/:id', Congenero.delDataG);

module.exports = router;