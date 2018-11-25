const UserRatingsDao = require('../dao/user_ratings')
const mongoose = require('mongoose')

exports.update_user_ratings = function (req, res) {
    let conditions = {user_id: mongoose.Types.ObjectId(req.user_id)}
    let update = { 
        attribute: new mongoose.Types.ObjectId(req.attribute),
        rating: req.rating
    }
    let options = { 'new': true }
    UserRatingsDao.findOneAndUpdate(conditions, update, options, function (err, user_ratings) {
        if (err) {
            res.send(err)
        } else {
            res.send(user_ratings)
        }
    })
}