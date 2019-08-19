const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'MentionsAPI',
    version: '1.0.0',
    description:'Api simples com CRUD, banco de dados em MongoDB (mongoose), logado ao MLAB(optei por testar mais opções fora o ATLAS ), que tem por objetivo guardar pérolas em frase dita por amigos'
  });
});

module.exports = router;