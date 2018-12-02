const UserRatingsDao = require('../dao/user_ratings')
const mongoose = require('mongoose')

exports.update_user_ratings = function (req, res) {
    let conditions = {
        user_id: mongoose.Types.ObjectId(req.user_id),
        attribute: mongoose.Types.ObjectId(req.attribute_id)
    }
    let update = { 
        rating: req.rating
    }
    let options = {
        'new': true,
        'upsert': true
    }
    UserRatingsDao.findOneAndUpdate(conditions, update, options, function (err, user_ratings) {
        if (err) {
            res.send(err)
        } else {
            res.send(user_ratings)
        }
    })
}