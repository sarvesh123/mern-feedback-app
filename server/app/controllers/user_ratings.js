const UserRatingsModel = require('../models/user_rating')

exports.rate_user = function (req, res) {
    UserRatingsModel.update_user_ratings(req.body, res)
}