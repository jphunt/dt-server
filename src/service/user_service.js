const User = require('../model/user_model');

function register(req, res) {
    const user = new User({
                              username: 'tom',
                              password: 'password'
                          });
    user.save(function (err, res) {
        console.log(res);
    })
}