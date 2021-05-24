const {check} = require('express-validator');


const validationAdminAddProd = {
    
    postAdminAddProdValidation: function(){

        var validation = [
            check('pnum', 'Product Number should be at least 6 characters.').notEmpty(), 
            check('pname', 'Product Name should be at least 5 characters.').notEmpty(),
            check('pdesc', 'Product Description should be at least 10 characters.').notEmpty(), 
            check('pprice', 'Product Price should not be empty.').notEmpty()
        ];

        return validation;
    }
    
}

module.exports = validationAdminAddProd;