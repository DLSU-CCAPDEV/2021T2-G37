const {check} = require('express-validator');


const validationReviewAdd = {
    
    postReviewAddValidation: function(){

        var validation = [
            check('rating', 'Rating should not be empty.').notEmpty(),
            check('review', 'Review should be at least 10 characters.').notEmpty(), 
        ];

        return validation;
    }
    
}

module.exports = validationReviewAdd;