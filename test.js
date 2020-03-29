let checkCookie = require('./routes/checkCookie')
let ans = false;
checkCookie('5e54a3f32cb8d219eaf9')
  .then(function (ret) {
    ans = ret
    console.log(ans)
  })
  .catch(function (err) {
    console.log(err)
  })

