const db = require('../models/db.js');
const bcrypt = require('bcrypt');
const { $where } = require('../models/ProductSchema.js');

const logincontroller = {

    
    getAdminLoggedInHome: function(req, res) {

        var details = {};

        if(req.session.userName) {

            details.flag = true;
            details.userName = req.session.userName;
        
        }
        else 
            details.flag = false;
        
        res.render('admin_home', details);
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

                         res.redirect('home/' + person.userName);
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
                    if (equal){

                        req.session.userName = admin.userName;
                        console.log(req.session.userName);
                        res.redirect('AdminLoggedInHome/' + admin.userName);
                    }
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