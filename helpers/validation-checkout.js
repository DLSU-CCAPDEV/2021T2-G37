const {check} = require('express-validator');


const validationCheckOut = {


    postCheckOutValidation: function(){

        var validation = [

            check('cardholder', 'Card Holder should not be empty.').notEmpty(), 
            check('creditcardnum', 'Credit Card Number should contain 19 characters.').isLength({min: 19, max: 19}),
            check('expirymonth', 'Expiry month should contain 1 or 2 digits.').isLength({min: 1, max: 2}),
            check('expiryyear', 'Expiry year should contain 2 digits.').isLength({min: 2, max: 2}),
            check('cvv', 'CVV should contain 3 digits.').isLength({min: 3, max: 3})
        ];

        return validation;
    }
    
}

module.exports = validationCheckOut;