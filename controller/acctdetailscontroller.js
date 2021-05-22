const db = require('../models/db.js');
const bcrypt = require('bcrypt');

const acctdetailsController = {


    getDetails: function(req, res) {

        var query = {userName: req.params.userName};

        var details = {};

        if(req.session.userName){

            details.flag = true;
            details.userName = req.session.userName;

        }

        else 
            details.flag = false;
    

        db.findOne('User', query, function(result){

            if(result != null) {

                
                    details.fullName = result.fullName,
                    details.userName = result.userName,
                    details.email =  result.email,
                    details.pw = result.pw,
                    details.deladdr = result.deladdr,
                    details.contactnum = result.contactnum

                //res.render('testing', details);
                res.render('acctdetails', details);
            }

        });
    },
    
    getCheckOutDetails: function(req, res){

        var query = {userName: req.params.userName};

        var details = {};

        if(req.session.userName){

            details.flag = true;
            details.userName = req.session.userName;
        }

        else 
            details.flag = false;
    
        db.findOne('User', query, function(result){

            if(result != null) {
               
                    details.userName = result.userName,
                    details.fullName = result.fullName,
                    details.email =  result.email,
                    details.deladdr = result.deladdr,
                    details.contactnum = result.contactnum

                //res.render('testing', details);
                res.render('checkoutpage', details);
            }

            else {
                res.render('error', details);
            }

        });

    },

    getNoEditDetailsView: function(req, res){

        var query = {userName: req.params.userName};

        var details = {};

        if(req.session.userName){

            details.flag = true;
            details.userName = req.session.userName;

        }

        else 
            details.flag = false;
    
        db.findOne('User', query, function(result){

            if(result != null) {
               
                    details.fullName = result.fullName,
                    details.userName = result.userName,
                    details.email =  result.email,
                    details.deladdr = result.deladdr,
                    details.contactnum = result.contactnum

                //res.render('testing', details);
                res.render('acctdetailsnoedit', details);
            }

            else {
                res.render('error', details);
            }

        });

    }, 

    
    editDetails: function(req, res){

        var username = req.body.username;
        var pw = req.body.password;

   
    db.findOne('User', {userName: username}, function(result){

        if(result){

            bcrypt.compare(pw, result.pw, function(err, equal){

                if(equal) {

                    db.updateOne('User', {userName: username}, {
                        $set: {
                            "fullName" : req.body.fullname,
                            "userName" : req.body.username, 
                            "email": req.body.email, 
                            "deladdr": req.body.deladdr,
                            "contactnum": req.body.contactnum
                        }
                    }), 
                   res.redirect('acctdetails/' + username);
                }
                else {
                    res.redirect('acctdetails/' + username);
                }

            })

        }

    })
    },

}

module.exports = acctdetailsController; 