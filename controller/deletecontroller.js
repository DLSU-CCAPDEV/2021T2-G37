const db = require('../models/db.js');


const deleteController = {

    getDeletePage: function(req, res){
       // res.render('delete');

       var query = {userName: req.params.userName};
    
        db.findOne('User', query, function(result){

            if(result != null) {
                var details = {
                    userName: result.userName,
                    pw: result.pw,
                };
                //res.render('testing', details);
                //res.render('acctdetails', details);
                res.render('delete', details);
            }

        });
    }, 

    deleteAccount: function(req, res){
        var username = req.body.username; //name attr from input 
        var curr_pw = req.body.password;

        var person = {
            userName: username,
            pw: curr_pw
        };

        db.deleteOne('User', person);
        res.redirect('/');
    }
   
}

module.exports = deleteController;