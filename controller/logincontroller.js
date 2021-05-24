const db = require('../models/db.js');
const bcrypt = require('bcrypt');

const logincontroller = {

    
    getLoggedInHome: function(req, res){

        var details = {};

        if(req.session.userName) {

            details.flag = true;
            details.userName = req.session.userName;


            db.findMany('Product', null, null, null, 5, 0, function(result) {
                res.render('LoggedInHome', {details: details, thumbnail: result});
            });
            
            
            res.render('LoggedInHome', details);
        }

        else {
          
            details.flag = false;
            res.render('login', details);
        }

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
                    if (equal) {

                         req.session.userName = person.userName;
                         console.log(req.session.userName);

                         res.redirect('LoggedInHome/' + person.userName);
                    }
                     else {
                        var details = {
                            flag: false, 
                            error: 'ID Number and/or Password is incorrect.'
                        }
                        res.render('login', details);
                    }
                })
            } else {
                var details = {
                    flag: false, 
                    error: 'ID Number and/or Password is incorrect.'
                }
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
                        res.render('admin_login', details);
                    }
                })
            }
            else {
                var details = {error: 'Username and/or Password is incorrect.'}
                res.render('admin_login', details);
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