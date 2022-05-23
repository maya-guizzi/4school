// dependencies 
const express = require('express')
const mongoose = require('mongoose')

// Get the models
const Notes = mongoose.model('notes')
const Comment = mongoose.model('comments')
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


router.get('/notes/create', (req,res) => {
  res.render('create-notes', {})
})


router.get('/notes/:id', async (req,res) => {
  // res.render('notes-details')
  const note = await Notes.findOne({
    _id: req.params.id
  }).lean()
  const comments = await Comment.find({
    note: req.params.id,
  })
  console.log(comments)
  if (note){
    res.render('notes-details', {
      note:note,
      comments,
      user: req.session.user
    })
  }else{
    res.redirect("/")
  }
})


router.post('/notes/create', async (req,res) => {
  // create  a new document on the database
  const notes = await Notes.create(req.body)
  // console.log(req.body)
  res.redirect('/notes/'+notes._id)
})

router.post('/notes/:id', async (req,res) => {
  // create  a new comment
  const note = await Notes.findOne({
    _id : req.params.id
  })
  const comments = await Comment.find({
    note: req.params.id,
  })
  // console.log(req.body)
  if (req.user){
    await Comment.create({
      user: req.user._id,
      note: req.params.id,
      ...req.body,
      likes: 0,
    })
  }
  res.render('create-notes', {
    comments,
    note: note,
    user: req.params.user
  })  

})

// export the requests
module.exports = router;