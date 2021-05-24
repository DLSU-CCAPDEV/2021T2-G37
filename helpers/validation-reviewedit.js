const {check} = require('express-validator');


const validationReviewEdit = {
    
    postReviewEditValidation: function(){

        var validation = [
            check('rating', 'Rating should not be empty.').notEmpty(),
            check('review', 'Review should be at least 10 characters.').notEmpty(), 
        ];

        return validation;
    }
    
}

module.exports = validationReviewEdit;