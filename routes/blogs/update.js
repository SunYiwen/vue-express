let express = require('express')
let router = express.Router()
let Passage = require('../../public/javascripts/mongodb/passage')
let Tag = require('../../public/javascripts/mongodb/tag')
let Type = require('../../public/javascripts/mongodb/type')
router.get('/update', function(req, res, next) {
  let id = req.query.id
  Passage.findOne({
    id:id
  })
    .then(function (passage) {
      console.log(passage)
      res.send(passage)
    })
    .catch(function (err) {
      console.log(err)
    })
});
router.post('/update', function(req, res, next) {
  //console.log('type_name:'+req.body.type_name)
  let passage = {
    title : req.body.title,
    content: req.body.content,
    description: req.body.description
  }
  Tag.findOne({
    tag_name:req.body.tag_name
  })
    .then(function (tag) {
      passage.tag_id = tag.tag_id
      return Type.findOne({
        type_name:req.body.type_name
      })
        .then(function (type) {
          passage.type_id= type.type_id
          return Passage.updateOne({
            id:req.body.id
          },passage)
        })
        .then(function (ret) {
          console.log(ret)
          res.send(true)
        })
        .catch(function (err) {
          console.log(err)
          res.send(false)
        })
    })
});

module.exports = router;
