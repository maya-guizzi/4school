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
router.get('/notes', async (req,res) => {
  // render the list of articles
  const notes = await Notes.find().lean()
  console.log(notes)
  res.render('notes', {
    notes:notes
  }) 
})

router.post('/notes/create', async (req,res) => {
  // create  a new document on the database
  await Notes.create(req.body)
  // console.log(req.body)
  res.render('create-notes', {})
})

router.get('/notes/create', (req,res) => {
  res.render('create-notes', {})
})

// export the requests
module.exports = router;