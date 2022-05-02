const express = require('express')

const mongoose = require('mongoose')

const User = mongoose.model('users')

const router = express.Router()

router.get('/login', async (req,res) => {
    // render the list of articles
    const users = await User.find().lean()
  console.log(users)
    res.render('login.ejs', {
        users:users
    })
  })

module.exports = router;