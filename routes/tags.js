// dependencies 
const express = require('express')
const mongoose = require('mongoose')

// Get the models
const Notes = mongoose.model('notes')



// create the routes
const router = express.Router()

// create the request
//list of the articles
router.get('/subjects/:subject',async (req,res) => {
  const notes = await Notes.find({subject: req.params.subject})

  res.render('homepage', {
    user: req.session.user,
    notes,
    filter:{
      type: 'subject',
      value: req.params.subject
    }
  })
})

router.get('/classes/:className',async (req,res) => {
  const notes = await Notes.find({className: req.params.className})

  res.render('homepage', {
    user: req.session.user,
    notes,
    filter:{
      type: 'className',
      value: req.params.className
    }
  })

})

// export the requests
module.exports = router;