const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema
const CookieSchema = new Schema({
  user:{
    type:String,
    require:true
  },
  expires:{
    type:Date,
    require: true
  }
})

module.exports = mongoose.model('Cookie',CookieSchema)


