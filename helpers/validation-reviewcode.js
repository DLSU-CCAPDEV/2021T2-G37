const {check} = require('express-validator');


const validationReviewCode = {
    
    postReviewCodeValidation: function(){

        var validation = [
            check('rnum', 'Review Number should be at least 6 characters.').notEmpty(), 
        ];

        return validation;
    }
    
}

module.exports = validationReviewCode;