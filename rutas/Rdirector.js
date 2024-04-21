const express = require('express');
const router = express.Router();
const Condirector = require('../controladores/Condirector');

router.get('/', Condirector.getDirectorById);
router.get('/:id', Condirector.getAllDirectors);
router.post('/', Condirector.addDirector);
router.patch('/:id', Condirector.upDirectors);
router.delete('/:id', Condirector.delDirector);

module.exports = router;