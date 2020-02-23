let Passage = require('./passage')
// let passage = {
//   id:3,
//   content:" # 利用art-template动态渲染文本\n" +
//     "\n" +
//     "## 1. 在html中使用模板引擎进行遍历渲染\n" +
//     "\n" +
//     "```html\n" +
//     "{{each files}}\n" +
//     " <tr>\n" +
//     "     <th scope=\"row\">{{ $index }}</th>\n" +
//     " \t <td>{{ $value }}</td>\n" +
//     " </tr>\n" +
//     " {{/each}}\n" +
//     "```\n" +
//     "\n" +
//     "files:遍历的对象\n" +
//     "\n" +
//     "$index:遍历的序号，从0开始\n" +
//     "\n" +
//     "$value:遍历的内容\n" +
//     "\n" +
//     "## 2. 在服务器端使用模板引擎\n" +
//     "\n" +
//     "```js\n" +
//     "var template=require('art-template')//引入模板引擎\n" +
//     "var data=template.render(data.toString(),{\n" +
//     "    files:files\n" +
//     "})\n" +
//     "response.end(data)\n" +
//     "```\n" +
//     "\n",
//   create_time: "2020-2-19",
//   description: "利用art-template动态渲染文本",
//   published:true,
//   title: "利用art-template动态渲染文本",
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
// Passage.find(function (err,ret) {
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log((ret));
//   }
// })
// Passage.deleteOne({_id:'5e4fdccf0437811a5c53f000'},function (err) {
//   if(err){}
// })
