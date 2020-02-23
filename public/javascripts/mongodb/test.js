let Passage = require('./passage')
// let passage = {
//   id:2,
//   content:" ERROR  Failed to get response from https://registry.npm.taobao.org/binary-mirror-config\nyarn install v1.22.0\ninfo No lockfile found.\ninfo There appears to be trouble with your network connection. Retrying...\n[1/4] Resolving packages...\ninfo There appears to be trouble with your network connection. Retrying...",
//   create_time: "2020-2-19",
//   description: "hello hhhhhh",
//   published:true,
//   title: "ERROR  Failed to get response from https://registry.npm.taobao.org/binary-mirror-config",
//   type_id:1,
//   tag_id: 2
// }
//   new Passage(passage).save(function (err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('保存成功')
//     }
//   })
Passage.find(function (err,ret) {
  if(err){
    console.log(err);
  }
  else{
    console.log((ret));
  }
})
// Passage.deleteOne({_id:'5e4fdccf0437811a5c53f000'},function (err) {
//   if(err){}
// })
