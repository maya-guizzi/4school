const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    user: String,
    content: String,
    note: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'notes'
    },
    likes: Number,
})


mongoose.model('comments', commentsSchema)