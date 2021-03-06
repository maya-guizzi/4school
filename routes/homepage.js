// dependencies 
const express = require('express')
const mongoose = require('mongoose')

// Get the models
const Notes = mongoose.model('notes')
const Forum = mongoose.model('forum')


// create the routes
const router = express.Router()

// create the request
//list of the articles
router.get('/', async (req,res) => {
  // render the list of articles
  const notes = await Notes.find().lean()
  console.log(notes, req.session)
  res.render('homepage', {
    notes:notes,
    user: req.session.user,
    filter: false
  })
})



// export the requests
module.exports = router;