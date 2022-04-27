// dependencies 
const express = require('express')
const mongoose = require('mongoose')

// Get the models
const Notes = mongoose.model('notes')
const Questions = mongoose.model('questions')


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

router.post('/articles/create', async (req,res) => {
  // create  a new document on the database
  await Article.create(req.body)
  // console.log(req.body)
  res.render('new-article', {})
})

// export the requests
module.exports = router;