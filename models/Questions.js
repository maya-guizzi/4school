const mongoose = require('mongoose')

const questionsSchema = new mongoose.Schema({
    user: String,
    content: String,
    likes: Number, 
})


mongoose.model('questions', questionsSchema)