const express = require('express');
const router = express.Router();
const mentionsController = require('../controllers/mentions-controller');

router.get('/', mentionsController.listMentions);
router.post('/', mentionsController.createMentions);
//id necessário para atualização e exclusão
router.put('/:id', mentionsController.updateMention);
router.delete('/:id',mentionsController.deleteMentions); 


module.exports = router;
