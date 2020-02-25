var express = require('express');
var router = express.Router();
let User = require('../public/javascripts/mongodb/user')

router.post('/user', function(req, res, next) {
  let username = req.body.username
  let password = req.body.password
  User.findOne({
    username: username
  })
    .then(function (user) {
      // console.log(user)
      if(user!=null&&user.password===password){
        res.send(true)
      }else {
        res.send(false)
      }

    })
});

module.exports = router;
