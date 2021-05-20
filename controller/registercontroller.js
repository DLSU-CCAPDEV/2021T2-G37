const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require('../models/db.js');


const registerController = {

    getRegister: function(req, res){
        res.render('register');
    }, 

    postRegister: function(req, res) {


        var errors = validationResult(req);

        if (!errors.isEmpty()){
            errors = errors.errors;

            var details = {};

            for (i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg;

            res.render('register', details);
        }

        else {

            var fullName = req.body.fullname;
            var userName = req.body.username;
            var email = req.body.email;
            var pw = req.body.password;
            var deladdr = req.body.deladdr;
            var contactnum = req.body.contactnum;

            bcrypt.hash(pw, saltRounds, function(err, hash){

                var acc = {
                    fullName: fullName, 
                    userName: userName, 
                    email:  email,
                    pw: hash,
                    deladdr: deladdr, 
                    contactnum:  contactnum
                }
                
                db.insertOneCallback('User', acc, function(flag){
        
                    if (flag){
                        res.redirect('/success?fullName=' + fullName + '&userName=' + userName);
                    }
                });   

            });
        }
    }, 

    getCheckUsername: function(req, res) {

        var userName = req.query.userName;

        db.findOne('User', {userName: userName}, function(result) {
            res.send(result);
        });

    },
    
    getCheckEmail: function(req, res) {

        var email = req.query.email;

        db.findOne('User', {email: email}, function(result) {
            res.send(result);
        });

    }, 

    getCheckContactNum: function(req, res){

        var contactnum = req.query.contactnum; 

        db.findOne('User', {contactnum: contactnum}, function(result){
            res.send(result);
        })

    }
}

module.exports = registerController;