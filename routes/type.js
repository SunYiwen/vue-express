let express = require('express')
let router = express.Router()
let Type = require('../public/javascripts/mongodb/type')

router.get('/type', function(req, res, next) {
  Type.find()
    .then(function (types) {
      res.send(types)
    })
});

module.exports = router;
