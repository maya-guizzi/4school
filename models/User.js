const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  points: Number,
})


mongoose.model('users', userSchema)