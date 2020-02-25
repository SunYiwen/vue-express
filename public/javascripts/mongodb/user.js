const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema
const UserSchema = new Schema({
  username:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require: true
  }
})

module.exports = mongoose.model('User',UserSchema)


