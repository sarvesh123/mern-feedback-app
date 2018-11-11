const express = require('express')
const router = express.Router()
const users = require('../controllers/users')

router.post('/register', users.register)
router.post('/login', users.login)

router.get('/get_users_to_vote', users.get_users_to_vote)

module.exports = router