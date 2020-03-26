const express = require('express')
const router = express.Router()
const Passage = require('../public/javascripts/mongodb/passage')
const Cookie = require('../public/javascripts/mongodb/cookie')

router.get('/', function(req, res, next) {
  // console.log('cookie:'+req.cookies.user)
  let cookie = req.cookies.user
  console.log('cookie:'+cookie)
  Cookie.findOne({
    user:cookie
  })
    .then(function (cookie) {
      if(cookie && cookie.expires > Date.now()){//cookie找到并且没有过期才能找到数据
        return Passage.find()
      }
    })
    .then(function (passages) {
      res.send(passages)
    })
    .catch(function (err) {
      res.send(null)
    })
});

module.exports = router;
