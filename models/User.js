const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  email: String,
  email: String,
})


mongoose.model('users', userSchema)