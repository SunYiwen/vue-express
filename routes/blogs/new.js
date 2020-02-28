let express = require('express')
let router = express.Router()
let Passage = require('../../public/javascripts/mongodb/passage')

router.post('/new', function(req, res, next) {
  console.log('blog:'+req.body.title)
  console.log('blog:'+req.body.content)
  let passage = {
    title : req.body.title,
    content: req.body.content,
    description: req.body.description,
    tag_id:2,
    type_id:4
  }
  passage.create_time = new Date()
  Passage.find()
    .then(function (ret) {
      let id = ret[ret.length-1].id+1
      passage.id = id
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
