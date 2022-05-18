const express = require('express')
const res = require('express/lib/response')
const { route } = require('express/lib/router')
const mongoose = require('mongoose')


const User = mongoose.model('users')

const router = express.Router()

router.get('/login', async (req,res) => {
  if (req.session.user){
    res.redirect("/")
  }else {
    console.log(req.body)
    res.render('login',{
      credentials: false
    })
 
  }
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
      console.log(user,req.session)
      req.session.user =  user
      console.log("new session to save",req.session)
      res.redirect('/')
    }
    res.render('login',{
      credentials : "Not found"
    })
  })

  router.get('/signup', async (req,res) => {
    console.log(req.body)
    res.render('signup')
    //const newUser = await User.create(req.body)
  })

  router.post('/signup', async (req,res) => {
    const newUser = await User.create(req.body)
    req.session.user = newUser
    res.redirect('/')
  })

  router.



module.exports = router;