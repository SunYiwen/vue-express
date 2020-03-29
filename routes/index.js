const express = require('express')
const router = express.Router()
const Passage = require('../public/javascripts/mongodb/passage')
const Cookie = require('../public/javascripts/mongodb/cookie')
const checkCookie = require('../routes/checkCookie')

router.get('/', function(req, res, next) {
  let cookie = req.cookies.user
  checkCookie(cookie)
    .then(function (ret) {
      if(ret === true){
        Passage.find()
          .then(function (passages) {
            res.send(passages)
          })
          .catch(function (err) {
            res.send(null)
          })
      }
      else{//cookie不合法
        res.writeHead(302)
        res.end('Current value does not match')
      }

    })
    .catch(function (err) {
      console.log(err)
      res.send(null)

    })
});

module.exports = router;
