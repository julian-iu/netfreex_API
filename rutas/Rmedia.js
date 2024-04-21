const express = require('express');
const router = express.Router();
const Conmedia = require('../controladores/Conmedia');

router.get('/', Conmedia.mediaById);
router.get('/:id', Conmedia.getAllMedia);
router.post('/', Conmedia.addmedia);
router.patch('/:id', Conmedia.upMedia);
router.delete('/:id', Conmedia.delMedia);

module.exports = router;