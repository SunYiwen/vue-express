const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema
const TagSchema = new Schema({
  tag_id:{
    type: Number,
    required:true
  },
  tag_name:{
    type: String,
    required:true
  }
})

module.exports = mongoose.model('Tag',TagSchema)


