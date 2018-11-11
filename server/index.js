const express = require('express')
const app = express()

const users = require('./app/routes/users')
const attributes = require('./app/routes/attributes')
const user_ratings = require('./app/routes/user_ratings')

const mongoose = require('mongoose')
const mongoDB = 'mongodb://localhost:27017/feedback'
mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(express.json())

app.use('/api/users', users)
app.use('/api/attributes', attributes)
app.use('/api/user_ratings', user_ratings)

app.listen(3000, () => console.log('app listening in port 3000'))