let Passage = require('./passage')
let Type = require('./type')
let Tag = require('./tag')
let User = require('./user')
// let user={
//   username:'syw',
//   password:'syw'
// }
// new User(user).save(function (err) {
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log('保存成功！')
//   }
//
// })
let tag ={
  tag_id: 5,
  tag_name: 'hhlalh'
}
// Tag.find(function (err,ret) {
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log(ret)
//   }
// })
// new Tag(tag).save(function (err) {
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log('保存成功！')
//   }
// })
// let type = {
//   type_id: 2,
//   type_name: 'Nodejs'
// }
new Tag(tag).save(function (err) {
  if(err){
    console.log(err)
  }
  else{
    console.log('保存成功！')
  }
})
// new Type(type).save(function (err) {
//   if(err){
//     console.log('hh'+err)
//   }
//   else{
//
//     console.log('ppp')
//   }
// })
// console.log('hhh')
// let passage = {
//   id:5,
//   content:"## 1. 什么是AJAX?\n" +
//     "\n",
//   description: "AJAX: Asynchronous Javascript +XML ,也就是异步的JS和XML.",
//   published:true,
//   title: "利用art-template动态渲染文本 AJAX",
//   type_id:2,
//   tag_id: 3
// }
// passage.create_time = new Date()
//   new Passage(passage).save(function (err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('保存成功')
//     }
//   })
// Passage.find(function (err,ret) {
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log((ret));
//   }
// })
// Passage.updateOne({
//   id:5
// },{
//   read_Time:5
// },function (err) {
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log('跟新成功')
//   }
//
// })
// Passage.deleteOne({_id:'5e5329994c128129867fa672'},function (err) {
//   if(err){}
// })
