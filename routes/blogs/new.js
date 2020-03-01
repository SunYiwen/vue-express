let express = require('express')
let router = express.Router()
let Passage = require('../../public/javascripts/mongodb/passage')
let Tag = require('../../public/javascripts/mongodb/tag')
let Type = require('../../public/javascripts/mongodb/type')

router.post('/new', function(req, res, next) {
  // console.log('blog:'+req.body.title)
  // console.log('blog:'+req.body.content)
  // console.log('type_name'+req.body.type_name)
  // console.log('tag_name'+req.body.tag_name)
  let passage = {
    title : req.body.title,
    content: req.body.content,
    description: req.body.description
    // tag_id:2,
    // type_id:4
  }
  passage.create_time = new Date()
  Passage.find()
    .then(function (ret) {
      let id = ret[ret.length-1].id+1
      passage.id = id
      return Type.findOne({
        type_name:req.body.type_name
      })
    })
    .then(function (type) {
      passage.type_id = type.type_id
      return Tag.findOne({
        tag_name:req.body.tag_name
      })
    })
    .then(function (tag) {
      passage.tag_id=tag.tag_id
      return new Passage(passage).save()
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
