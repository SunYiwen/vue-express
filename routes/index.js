const express = require('express')
const router = express.Router()
const Passage = require('../public/javascripts/mongodb/passage')

router.get('/', function(req, res, next) {
  Passage.find()
    .then(function (passages) {
      res.send(passages)
    })
});

module.exports = router;
