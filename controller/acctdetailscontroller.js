const db = require('../models/db.js');

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

    loadDetails: function(req, res){

        var query = {userName: req.params.userName};
    
        db.findOne('User', query, function(result){

            if(result != null) {
                var details = {
                    fullName: result.fullName,
                    userName: result.userName,
                    email: result.email,
                    pw: result.pw,
                    deladdr: result.deladdr,
                    contactnum: result.contactnum
                };
                //res.render('testing', details);
                //res.render('acctdetails', details);
                res.redirect('acctdetails/' + query);
            }

        });
    }, 

    editDetails: function(req, res){

        var username = req.body.username;

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
    },


    deleteacct: function(req, res){
        db.deleteOne('User', {"userName":  req.body.username});
        res.send('successdelete')

    }
}

module.exports = acctdetailsController; 