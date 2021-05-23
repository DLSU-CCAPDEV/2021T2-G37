const {check} = require('express-validator');


const validationAdminAddProd = {
    
    postAdminAddProdValidation: function(){

        var validation = [
            check('pNum', 'Product Number should be at least 6 characters.').notEmpty(), 
            check('pName', 'Product Name should be at least 5 characters.').notEmpty(),
            check('pDesc', 'Product Description should be at least 10 characters.').notEmpty(), 
            check('pPrice', 'Product Price should not be empty.').notEmpty(),
            //check('pImage1', 'Product Image 1 should not be empty.').notEmpty() 
        ];

        return validation;
    }
    
}

module.exports = validationAdminAddProd;