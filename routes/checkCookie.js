const Cookie = require('../public/javascripts/mongodb/cookie')
function checkCookie (cookie){
  return new Promise(function (resolve,reject) {
    Cookie.findOne({
      user:cookie
    })
      .then(function (cookie) {
        if(cookie !== null){
          if(cookie.expires>= Date.now()){
            resolve(true)
          }
          else{
            resolve(false)
          }
        }
        else{
          resolve(false)//没有找到对应的cookie
        }
      })
      .catch(function (err) {
        reject(err)
      })

  })
}
module.exports = checkCookie
