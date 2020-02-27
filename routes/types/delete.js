let express = require('express')
let router = express.Router()
let Type = require('../../public/javascripts/mongodb/type')

router.post('/delete', function(req, res, next) {
  console.log('id='+req.body.id)
  Type.deleteOne({
    type_id:req.body.id
  })
    .then(function (ret) {
      console.log(ret)
      res.send(true)
    })
    .catch(function (err) {
      console.log(err)
      res.send(false)
    })
});

module.exports = router;
