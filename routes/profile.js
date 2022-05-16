// dependencies 
const express = require('express')
const mongoose = require('mongoose')

// Get the models
const User = mongoose.model('users')


// create the routes
const router = express.Router()


router.get('/', async (req,res) => {
  if (req.session.user){
    res.redirect("/profile")
  }
 
  })



// export the requests
module.exports = router;