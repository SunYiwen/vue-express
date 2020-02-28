let express = require('express')
let router = express.Router()
let Tag = require('../../public/javascripts/mongodb/tag')

router.get('/update', function(req, res, next) {
  let tag_id = req.query.id
  Tag.findOne({
    tag_id:tag_id
  })
    .then(function (tag) {
      console.log(tag)
      res.send(tag)
    })
    .catch(function (err) {
      console.log(err)
    })
});
router.post('/update', function(req, res, next) {
  let tag = {
    tag_name: req.body.tag_name
  }
  Tag.updateOne({
    tag_id:req.body.tag_id
  },tag)
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
