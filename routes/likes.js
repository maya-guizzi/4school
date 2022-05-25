// dependencies 
const express = require('express')
const mongoose = require('mongoose')

// Get the models
const Comment = mongoose.model('comments')



// create the routes
const router = express.Router()

router.get('/likes/:commentId',async (req,res) => {
  const comment = await Comment.findOneAndUpdate({
    _id: req.params.commentId
  },{$inc : {likes : 1}})

  res.redirect('/notes/'+comment.note)

})

// export the requests
module.exports = router;