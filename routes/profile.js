const express = require('express')
const res = require('express/lib/response')
const { route } = require('express/lib/router')
const mongoose = require('mongoose')
const User = mongoose.model('users')

router.get('/', async (req,res) => {
    if (req.session.user){
      res.redirect("/profile")
    }
   
    })