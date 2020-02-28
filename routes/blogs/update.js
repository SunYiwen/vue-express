let express = require('express')
let router = express.Router()
let Passage = require('../../public/javascripts/mongodb/passage')

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
  let passage = {
    title : req.body.title,
    content: req.body.content,
    description: req.body.description,
    tag_id:2,
    type_id:4
  }
  Passage.updateOne({
    id:req.body.id
  },passage)
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
