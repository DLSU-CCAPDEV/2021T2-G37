const {check} = require('express-validator');


const validationAdminEditCode = {
    
    postAdminEditCodeValidation: function(){

        var validation = [
            check('pnum', 'Product Number should be at least 6 characters.').notEmpty(), 
        ];

        return validation;
    }
    
}

module.exports = validationAdminEditCode;