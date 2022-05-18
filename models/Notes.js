const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    user: String,
    title: String,
    image: String,
    caption: String,
    subject: String,
    year: String,
    likes: Number,
    comments: String,
})


mongoose.model('notes', notesSchema)