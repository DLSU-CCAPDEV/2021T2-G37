const db = require('../models/db.js');
const bcrypt = require('bcrypt');

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

        db.findOne('User', {userName: username}, function(result) {
            if(result){

                var person = {
                    userName: result.userName
                }

                bcrypt.compare(pw, result.pw, function(err, equal){
                    if (equal) 
                     res.redirect('LoggedInHome/' + person.userName);

                     else {
                        var details = {error: 'Username and/or Password is incorrect.'}
                        res.render('login', details);
                    }
                })
                // res.redirect('LoggedInHome/' + username);
                //console.log('LoggedInHome/' + username);
                //res.render('LoggedInHome')
                //res.send('succesfully logged in');
            } else {
                var details = {error: 'Username and/or Password is incorrect.'}
                res.render('login', details);
            }
        });

    }, 

    findAdmin: function(req, res) {
        var username = req.body.username;
        var pw = req.body.password;

        db.findOne('Admin', {userName: username}, function(result) {
            if (result) {

                var admin = {
                    userName: result.userName
                }

                bcrypt.compare(pw, result.pw, function(err, equal){
                    if (equal)
                        res.redirect('AdminLoggedInHome/' + admin.userName);
                    
                    else {
                        var details = {error: 'Username and/or Password is incorrect.'}
                        res.render('login', details);
                    }
                })
            }
            else {
                var details = {error: 'Username and/or Password is incorrect.'}
                res.render('login', details);
            }
        });
    }
}

module.exports = logincontroller;

 // if(result != null){
            //     res.redirect('AdminLoggedInHome/' + username);
            //     //console.log('LoggedInHome/' + username);
            //     //res.render('LoggedInHome')
            //     //res.send('succesfully logged in');
            // } else {
            //     res.send('Incorrect username/ password');
            // }