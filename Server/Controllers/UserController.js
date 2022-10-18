const registers = (req, res) => {
  console.log(req.body)

  User.register(
    { username: req.body.username },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err)
        res.redirect('/')
      } else {
        passport.authenticate('local')(req, res, function () {
          res.redirect('/movies')
        })
      }
    }
  )
}

const login = (req, res) => {
  console.log(req.body)

  const user = new User({
    username: req.body.username,
    password: req.body.password,
  })
  req.login(user, function (err) {
    if (err) {
      console.log(err)
    } else {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/movies')
      })
    }
  })
}

module.exports = {
  registers,
  login,
}
