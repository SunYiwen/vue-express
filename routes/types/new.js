let express = require('express')
let router = express.Router()
let Type = require('../../public/javascripts/mongodb/type')

router.post('/new', function(req, res, next) {
  console.log('type:'+req.body.type_name)
  Type.findOne({
    type_name:req.body.type_name
  })
    .then(function (ret) {
     // console.log(ret)
      if(ret===null){
        return Type.find()
      }
      else{
        res.send(false)
      }
    })
    .then(function (ret) {
      let type_id
      if(ret.length==0){
        type_id=1;
      }
      else{
         type_id = ret[ret.length-1].type_id+1
      }
      let type = {
        type_name : req.body.type_name,
        type_id:type_id
      }
      return new Type(type).save()
    })
    .then(function (ret) {
      res.send(true)
    })
    .catch(function (err) {
      console.log(err)
    })
});

module.exports = router;
