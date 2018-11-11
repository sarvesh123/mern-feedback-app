const UserModel = require('../models/users')

exports.register = function (req, res) {
    UserModel.createUser(req.body, res)
}

exports.login = function (req, res) {
    UserModel.login(req.body, res)
}

exports.get_users_to_vote = function (req, res) {
    let login_token = req.get('login_token')
    UserModel.get_users_to_vote(login_token, res)
}