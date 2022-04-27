// dependencies 
const express = require('express')
const mongoose = require('mongoose')

// Get the models
const Notes = mongoose.model('notes')


// create the routes
const router = express.Router()

// create the request
//list of the articles
router.get('/', async (req,res) => {
  // render the list of articles
  const notes = await Notes.find().lean()
  console.log(notes)
  res.render('index.ejs', {
    notes:notes
  })
})


// export the requests
module.exports = router;