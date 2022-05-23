// dependencies 
const express = require('express')
const mongoose = require('mongoose')

// Get the models
const User = mongoose.model('users')


// create the routes
const router = express.Router()

router.get('/profile', (req,res) => {

 user = req.session.user
res.render("profile")
 
})



// export the requests
module.exports = router;
