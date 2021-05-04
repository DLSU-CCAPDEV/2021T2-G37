const db = require('../models/db.js');

const acctdetailsController = {


    getDetails: function(req, res) {

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
                res.render('acctdetails', details);
            }

        });
    }, 

    getNoEditDetailsView: function(req, res){

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
                res.render('acctdetailsnoedit', details);
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
                "pw": req.body.password,
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