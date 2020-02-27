let express = require('express')
let router = express.Router()
let Tag = require('../../public/javascripts/mongodb/tag')

router.post('/delete', function(req, res, next) {
  console.log('id='+req.body.id)
  Tag.deleteOne({
    tag_id:req.body.id
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
