var express = require('express');
var router = express.Router();
let User = require('../public/javascripts/mongodb/user')
let Cookie = require('../public/javascripts/mongodb/cookie')

router.post('/user', function(req, res, next) {
  let username = req.body.username
  let password = req.body.password
  User.findOne({
    username: username
  })
    .then(function (user) {
      if(user!=null&&user.password===password){
        let expires = new Date(Date.now() + 10000000)
        res.cookie('user',user._id,{ expires: expires, path: '/', domain: 'localhost' })
        let cookie = {
          expires:expires,
          user:user._id
        }
        new Cookie(cookie).save()
          .then(function (ret) {
            console.log('新建Cookie成功！')
            res.send(true)
          })
          .catch(function (err) {
            console.log('新建Cookie失败！')
          })
      }else {
        res.send(false)
      }

    })
});

module.exports = router;
