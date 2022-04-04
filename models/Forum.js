const mongoose = require('mongoose')

const forumSchema = new mongoose.Schema({
    user: String,
    question: String,
    image: String,
    like: Number,
})


mongoose.model('forum', forumSchema)