const UserRatingsModel = require('../models/user_rating')

exports.rate_user = function (req, res) {
    let requestBody = req.body
    if ( /^\d+$/.test(requestBody.rating) ) {
        UserRatingsModel.update_user_ratings(req.body, res)
    } else {
        res.status(400).json({
            'message': 'Incorrect Input'
        })
    }
}