const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
//comment.....
console.log('hello')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
const User = require('./Models/userModel')

app.use(
  session({
    //using session
    secret: 'our little secret', //key for hash ans salt.....
    resave: false,
    saveUninitialized: false,
  })
)

app.use(passport.initialize()) //initialize the passport
app.use(passport.session())
passport.use(User.createStrategy()) //
passport.serializeUser(User.serializeUser()) //
passport.deserializeUser(User.deserializeUser()) //

app.get('/', function (req, res) {
  res.send('hello')
})
app.post('/home', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})

// app.post('/register', (req, res) => {
//   console.log(req.body)

//   User.register(
//     { username: req.body.username },
//     req.body.password,
//     function (err, user) {
//       if (err) {
//         console.log(err)
//         res.redirect('/')
//       } else {
//         passport.authenticate('local')(req, res, function () {
//           res.redirect('/movies')
//         })
//       }
//     }
//   )
// })

// app.post('/login', (req, res) => {
//   console.log(req.body)

//   const user = new User({
//     username: req.body.username,
//     password: req.body.password,
//   })
//   req.login(user, function (err) {
//     if (err) {
//       console.log(err)
//     } else {
//       passport.authenticate('local')(req, res, function () {
//         res.redirect('/movies')
//       })
//     }
//   })
// })

mongoose.connect('mongodb://localhost:27017/Netflix')

app.listen(5000, () => {
  console.log('server started on port 5000')
})
