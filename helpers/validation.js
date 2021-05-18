const {check} = require('express-validator');


const validation = {


    postRegisterValidation: function(){

        var validation = [


            check('fullname', 'Full name should not be empty.').notEmpty(), 
            check('username', 'Username should not be empty.').notEmpty(),
            check('email', 'Email should not be empty.').notEmpty(),
            check('password', 'Password should contain at least 10 characters.').isLength({min: 10}),
            check('deladdr', 'Delivery address should contain at least 15 characters.').isLength({min: 15}), 
            check('contactnum', 'Contact Number should contain 11 digits.').isLength({min: 11, max: 11})
        ];

        return validation;
    }
    
}

module.exports = validation;