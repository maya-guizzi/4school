const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    user: String,
    content: String,
    likes: Number,
})


mongoose.model('comments', commentsSchema)