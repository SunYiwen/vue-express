let express = require('express')
let router = express.Router()
let Type = require('../public/javascripts/mongodb/tag')

router.get('/tags', function(req, res, next) {
  Type.find()
    .then(function (tags) {
      res.send(tags)
    })
});

module.exports = router;
