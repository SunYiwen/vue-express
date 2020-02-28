let express = require('express')
let router = express.Router()
let Tag = require('../../public/javascripts/mongodb/tag')

router.post('/new', function(req, res, next) {
  console.log('tag:'+req.body.tag_name)
  Tag.findOne({
    tag_name:req.body.tag_name
  })
    .then(function (ret) {
      // console.log(ret)
      if(ret===null){
        return Tag.find()
      }
      else{
        res.send(false)
      }
    })
    .then(function (ret) {
      let tag_id = ret[ret.length-1].tag_id+1
      let tag = {
        tag_name : req.body.tag_name,
        tag_id:tag_id
      }
      return new Tag(tag).save()
    })
    .then(function (ret) {
      res.send(true)
    })
    .catch(function (err) {
      console.log(err)
    })
});

module.exports = router;
