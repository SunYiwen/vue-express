const express = require('express')
const router = express.Router()
const Passage = require('../public/javascripts/mongodb/passage')

/* GET home page. */
router.get('/', function(req, res, next) {
  Passage.find(function (err,data) {
    if(err){
      console.log(err)
    }
    else{
      console.log(data[0]._id)
      console.log(typeof data)
      res.send(data)
    }

  })
});

module.exports = router;
