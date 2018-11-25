const UserDao = require('../dao/users')
const randomString = require('randomstring')

exports.createUser = function (req, res) {
    UserDao.find({
        email: req.email
    }, function (err, user) {
        if (err) {
            res.send(err)
        } else if (user.length === 0) {
            const newUser = new UserDao({
                firstName: req.firstName,
                lastName: req.lastName,
                email: req.email,
                password: req.password,
                created: Date.now(),
                login_token: randomString.generate()
            })
            newUser.save(function (err, user) {
                if (err) {
                    res.send(err)
                } else {
                    res.send(user)
                }
            })
        } else {
            res.status(409).send('user with the same email already exists')
        }
    })    
}

exports.login = function (req, res) {
    let conditions = { 'email': req.email, 'password': req.password }
    let login_token = randomString.generate()
    let update = { 'login_token': login_token }
    let options = { 'new': true }
    UserDao.findOneAndUpdate(conditions, update, options, function (err, user) {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}

exports.get_users_to_vote = function (login_token, res) {
    let return_fields = '_id firstName lastName'
    UserDao.find({
        'login_token': { '$ne': login_token }
    }, return_fields, function (err, users) {
        if (err) {
            res.send(err)
        } else {
            res.send(users)
        }
    })
}