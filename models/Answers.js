const mongoose = require('mongoose')

const answersSchema = new mongoose.Schema({
  user: String,
  content: String,
  question: String,
  likes: Number,
})


mongoose.model('answers', answersSchema)