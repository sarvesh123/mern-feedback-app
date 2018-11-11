const express = require('express')
const router = express.Router()
const user_ratings = require('../controllers/user_ratings')

router.post('/rate_user', user_ratings.rate_user)

module.exports = router