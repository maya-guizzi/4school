const mongoose = require('mongoose')

const tagsSchema = new mongoose.Schema({
    subject: String,
    class: String,
    topic: String,
})


mongoose.model('tags', notesSchema)