const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'first name required']
    },
    lastName: {
        type: String,
        required: [true, 'first name required']
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: [6, 'Password is too short']
    },
    created: Date,
    updated: { type: Date, default: Date.now },
    login_token: String
})

module.exports = mongoose.model('User', UserSchema)
