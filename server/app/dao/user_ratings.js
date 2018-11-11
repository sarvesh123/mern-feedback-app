const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserRatingsSchema = new Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    attribute: mongoose.Schema.Types.ObjectId,
    rating: String
})

module.exports = mongoose.model('User_Ratings', UserRatingsSchema)