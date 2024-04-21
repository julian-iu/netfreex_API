const express = require('express');
const router = express.Router();
const Conproductor = require('../controladores/Conproductor');

router.get('/', Conproductor.productoraById);
router.get('/:id', Conproductor.getAllProducers);
router.post('/', Conproductor.addProductora);
router.patch('/:id', Conproductor.upProducers);
router.delete('/:id', Conproductor.delProducers);

module.exports = router;
