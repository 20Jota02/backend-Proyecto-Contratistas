const express = require('express')
const router = express.Router()

const { signup, signin } = require('../controller/auth')

router.post('/login', signup)


router.post('/register', signin)


module.exports = router