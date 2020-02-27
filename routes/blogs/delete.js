let express = require('express')
let router = express.Router()
let Passage = require('../../public/javascripts/mongodb/passage')

router.post('/delete', function(req, res, next) {
  console.log('id='+req.body.id)
  Passage.deleteOne({
    id:req.body.id
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
