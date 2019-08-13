const express = require('express');
const router = express.Router();
const mentionsController = require('../controllers/mentions-controller');

router.get('/', mentionsController.listMentions);
router.post('/', mentionsController.createMentions);
router.delete('localhost:3001/:id/');

module.exports = router;