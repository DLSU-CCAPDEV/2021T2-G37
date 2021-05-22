const { validationResult } = require('express-validator');
const db = require('../models/db.js');


const checkoutController = {

    postCheckOut: function(req, res) {

        var username = req.body.username; //name attr from input 

        var errors = validationResult(req);

        if (!errors.isEmpty()){
            errors = errors.errors;

            var details = {};

            for (i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg;

            // res.render('checkoutpage', details);
            res.redirect('checkout/' + username);
        }

        else {

            var cardholder = req.body.cardholder;
            var creditcardnum = req.body.creditcardnum;
            var expirymonth = req.body.expirymonth;
            var expiryyear = req.body.expiryyear;
            var cvv = req.body.cvv;

            var details = {

                cardholder: cardholder, 
                creditcardnum: creditcardnum, 
                expirymonth: expirymonth, 
                expiryyear: expiryyear,
                cvv: cvv
            }
            db.insertOne('PaymentDetails', details);
            // res.render('confirmationpage');
            res.redirect('confirmation/' + username);
        }
    }, 

    getConfirmationPage: function(req, res){

        var query = {userName: req.params.userName};

        res.render('confirmationpage', query);

    }
}

module.exports = checkoutController;