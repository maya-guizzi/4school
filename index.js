// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


// create the app
const app =  express()
app.use(express.static('public'))

// enable POST request
app.use(bodyParser.urlencoded({
  extended: true
}));
// Install ejs - to show JS variables into the HTML
app.set('view engine','ejs')

// Connect to mongoDb
const mongoDbURI = 'mongodb+srv://mayaguizzi:4school@cluster0.hqum5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoDbURI)


// Connect the Models
require('./models/Answers')
require('./models/Comments')
require('./models/Forum')
require('./models/Notes')
require('./models/Questions')
require('./models/Tags')
require('./models/User')

// Connect the routes
app.use(require('./routes/homepage'))


const frontendRoutes = require('./routes/homepage')


app.listen(3000)