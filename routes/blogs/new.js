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
    type_id:4,
    id:10
  }
  passage.create_time = new Date()
  new Passage(passage).save()
    .then(function (ret) {
      console.log(ret)
      res.send('hhh')
    })
    .catch(function (err) {
      console.log(err)
    })
});

module.exports = router;
