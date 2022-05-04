const express = require('express')
const res = require('express/lib/response')
const { route } = require('express/lib/router')
const mongoose = require('mongoose')


const User = mongoose.model('users')

const router = express.Router()

router.get('/login', async (req,res) => {
    // render the list of articles
    const users = await User.find({
      email: req.body.email, 
      password: req.body.password
    }).lean()
    console.log(users)
    res.render('login', {
        users:users
    })
  })

module.exports = router;