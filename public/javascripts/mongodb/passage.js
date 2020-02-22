const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema
const PassageSchema = new Schema({
  id:{
    type: Number,
    required: true
  },
  content:{
    type: String
  },
  create_time:{
    type:Date,
    required: true
  },
  description:{
    type: String
  },
  published:{
    type: Boolean,
    default: true
  },
  title:{
    type: String,
    required: true
  },
  type_id: {
    type: Number
  },
  tag_id:{
    type: Number
  }
})

module.exports = mongoose.model('Passage',PassageSchema)


