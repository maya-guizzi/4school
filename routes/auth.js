const express = require('express')
const res = require('express/lib/response')
const { route } = require('express/lib/router')
const mongoose = require('mongoose')


const User = mongoose.model('users')

const router = express.Router()

router.get('/login', async (req,res) => {

  console.log(req.body)
    res.render('login')
  })


router.post('/login', async (req,res) => {

  console.log(req.body)
    // render the list of articles
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).lean()
    console.log(user)
    if (user){
      // 
      // req.session.user = user
      res.redirect('homepage')
    }
    res.render('login')
  })

  router.get('/signup', async (req,res) => {
    console.log(req.body)
    res.render('signup')
    //const newUser = await User.create(req.body)
  })

  router.post('/signup', async (req,res) => {
    const newUser = await User.create(req.body)
    res.render('signup')
  })

module.exports = router;