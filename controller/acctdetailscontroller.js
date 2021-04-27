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
                res.render('acctdetailsnoedit', details);
            }

        });
    }
}

module.exports = acctdetailsController; 