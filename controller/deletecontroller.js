const db = require('../models/db.js');


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
       
        db.deleteOne('User', {userName: username});
        
        req.session.destroy(function(err){

            if(err) throw err;
            res.redirect('/')
        });
    }
   
}

module.exports = deleteController;