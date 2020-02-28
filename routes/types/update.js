let express = require('express')
let router = express.Router()
let Type = require('../../public/javascripts/mongodb/type')

router.get('/update', function(req, res, next) {
  let type_id = req.query.id
  Type.findOne({
    type_id:type_id
  })
    .then(function (type) {
      console.log(type)
      res.send(type)
    })
    .catch(function (err) {
      console.log(err)
    })
});
router.post('/update', function(req, res, next) {
  console.log('type_name:'+req.body.type_id)
  let type = {
    type_name: req.body.type_name
  }
  // Type.find({
  //   type_id:req.body.type_id
  // })
  Type.updateOne({
    type_id:req.body.type_id
  },type)
    .then(function (ret) {
     // console.log('ret'+ret)
      res.send(true)
    })
    .catch(function (err) {
      console.log(err)
      res.send(false)
    })
});

module.exports = router;
