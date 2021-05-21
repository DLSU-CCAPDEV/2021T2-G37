const db = require('../models/db.js');
const bcrypt = require('bcrypt');

const deleteController = {

    getDeletePage: function(req, res){
       // res.render('delete');

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
                // var details = {
                //     userName: result.userName,
                //     pw: result.pw,
                // };

                details.userName = result.userName,
                details.pw = result.pw
                //res.render('testing', details);
                //res.render('acctdetails', details);
                res.render('delete', details);
            }

        });
    }, 

    deleteAccount: function(req, res){
        var username = req.body.username; //name attr from input 
        var pw = req.body.password;

        db.findOne('User', {userName: username}, function(result){

            if(result){

                bcrypt.compare(pw, result.pw, function(err, equal){

                    if(equal) {

                        db.deleteOne('User', {userName: username});
        
                        req.session.destroy(function(err){

                                if(err) throw err;
                                res.redirect('/')
                            });

                    }
                    else {
                        details = {
                            userName: username,
                            error: 'Password is incorrect. Unable to delete.'
                        }
                        res.render('delete', details)
                        // res.redirect('/delete/' + username);
                    }

                })

            }

        })
       
        // db.deleteOne('User', {userName: username});
        
        // req.session.destroy(function(err){

        //     if(err) throw err;
        //     res.redirect('/')
        // });
    }, 

    deleteCorrectAccount: function(req, res){

    }
   
}

module.exports = deleteController;