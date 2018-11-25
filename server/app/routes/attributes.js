const express = require('express')
const router = express.Router()
const attributes = require('../controllers/attributes')

router.post('/add', attributes.add)
router.get('/', attributes.get_attributes)

module.exports = router