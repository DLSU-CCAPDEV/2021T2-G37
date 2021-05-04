const db = require('../models/db.js');

const logincontroller = {

    getLoginPage: function(req, res) {
       res.render('login');
    },
    
    getLoggedInHome: function(req, res){
        res.render('LoggedInHome', {userName: req.params.userName});
    },

    findUser: function(req, res) {

        var username = req.query.username;
        var pw = req.query.password;

        var person = {
            userName: username,
            pw: pw
        }

        db.findOne('User', person, function(result) {
            if(result != null){
                res.redirect(307, 'LoggedInHome/' + username);
            } else {
                res.send('Incorrect username/ password');
            }
        });

    }
}

module.exports = logincontroller;