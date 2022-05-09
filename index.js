// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')

// create the app
const app =  express()
app.use(express.static('public'))


app.use(cookieSession({
  name: 'session',
  keys: "dljhdsljfh",
  // Cookie Options
  maxAge: 90*24 * 60 * 60 * 1000 // 24 hours
}))

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

// Connect the routesnode inde
app.use(require('./routes/auth'))
app.use(require('./routes/forum'))
app.use(require('./routes/homepage'))
app.use(require('./routes/notes'))
app.use(require('./routes/tags'))


const frontendRoutes = require('./routes/homepage')
 

app.listen(3000)