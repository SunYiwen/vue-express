const express = require('express')
const router = express.Router()
const Passage = require('../public/javascripts/mongodb/passage')
router.get('/blog', function(req, res, next) {
  let id = req.query.id
  Passage.findOne({
    id:id
  },function (err,passage) {
    if(err){
      console.log(err)
    }
    else{
      //console.log(passage)
      res.send(passage)
    }


  })
});

module.exports = router;
