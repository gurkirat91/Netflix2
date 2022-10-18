const express = require('express')
const router = express.Router()
const User = require('../Models/userModel')
const { registers, login } = require('../Controllers/UserController')

router.post('/register', registers)

router.post('/login', login)

module.exports = router
