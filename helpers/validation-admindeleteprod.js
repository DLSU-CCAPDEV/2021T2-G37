const {check} = require('express-validator');


const validationAdminDeleteProd = {
    
    postAdminDeleteProdValidation: function(){

        var validation = [
            check('pnum', 'Product Number should be at least 6 characters.').notEmpty(), 
        ];

        return validation;
    }
    
}

module.exports = validationAdminDeleteProd;