const User = require('../model/user_model');

/**
 * login
 * @param req
 * @param res
 */
function login(req, res) {
    const {username, password} = req.body;
    User.find({username, password}, function (err, user) {
        res.send(user);
    })

}