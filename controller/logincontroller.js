const db = require('../models/db.js');

const logincontroller = {

    
    getLoggedInHome: function(req, res){
        res.render('LoggedInHome', {username: req.params.username});
    },
    
    getAdminLoggedInHome: function(req, res) {
        res.render('admin_home', {username: req.params.username});
    },

    findUser: function(req, res) {

        var username = req.body.username;
        var pw = req.body.password;

        var person = {
            userName: username,
            pw: pw
        }

        db.findOne('User', person, function(result) {
            if(result != null){
                res.redirect('LoggedInHome/' + username);
                //console.log('LoggedInHome/' + username);
                //res.render('LoggedInHome')
                //res.send('succesfully logged in');
            } else {
                res.send('Incorrect username/ password');
            }
        });

    }, 

    findAdmin: function(req, res) {
        var username = req.body.username;
        var pw = req.body.password;

        var person = {
            userName: username,
            pw: pw
        }

        db.findOne('Admin', person, function(result) {
            if(result != null){
                res.redirect('AdminLoggedInHome/' + username);
                //console.log('LoggedInHome/' + username);
                //res.render('LoggedInHome')
                //res.send('succesfully logged in');
            } else {
                res.send('Incorrect username/ password');
            }
        });
    }
}

module.exports = logincontroller;