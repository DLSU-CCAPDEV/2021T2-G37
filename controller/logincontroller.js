const db = require('../models/db.js');

const logincontroller = {

    getLoginPage: function(req, res) {
        res.render('login');
    }, 

    findUser: function(req, res) {

        var userName = req.query.userName;

        db.findOne('User', {userName: userName}, function(result) {
            res.send(result);
        });

        res.render('LoggedInHome');

    }
}

module.exports = logincontroller;