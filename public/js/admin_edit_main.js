$(document).ready(function () {

    function isFilled() {
        var pName = validator.trim($('#pname').val());
        var pDesc = validator.trim($('#pdesc').val());
        var pPrice = validator.trim($('#pprice').val());

        var pNameEmpty = validator.isEmpty(pName);
        var pDescEmpty = validator.isEmpty(pDesc);
        var pPriceEmpty = validator.isEmpty(pPrice);

        return !pNameEmpty && !pDescEmpty && !pPriceEmpty;
    }

    /* 
    start of validation 
    */
     //still to be edited; not yet working
     function isValidPPrice(field) {
        var pPrice = validator.trim($('#pprice').val());
        var isValidLength = validator.isLength(pPrice, {min: 1});

        if(isValidLength){
            if ($('#pprice').val()>0){
                if (field.is($('#pprice')))
                    $('#ppriceerror').text('');
                
                return true;
            }
    
            else {
                if(field.is($('#pprice')))
                    $('#ppriceerror').text('Product Price should be greater than 1.');
                
                return false;
            }
        }
        else {
            if(field.is($('#pprice')))
                $('#ppriceerror').text('Product Price should not be empty.');
            
            return false;
        }
        
    }

    function isValidPName(field) {
        var pName = validator.trim($('#pname').val());
        var isValidLength = validator.isLength(pName, {min: 5});

        if (isValidLength){
            if (field.is($('#pname')))
                $('#pnameerror').text('');
            
            return true;
        }

        else {
            if(field.is($('#pname')))
                $('#pnameerror').text('Product Name should be at least 5 characters.');
            
            return false;
        }
        
    }

    function isValidPDesc(field) {
        var pDesc = validator.trim($('#pdesc').val());
        var isValidLength = validator.isLength(pDesc, {min: 10});

        if (isValidLength){
            if (field.is($('#pdesc')))
                $('#pdescerror').text('');

            return true;
        }

        else {
            if(field.is($('#pdesc')))
                $('#pdescerror').text('Product Description should be at least 10 characters.');
            
            return false;
        }
        
    }

    /*
    validatefield function 
    */
    
    function validateField(field, fieldName, error) {
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(empty) {
            field.prop('value', '');
            error.text(fieldName + ' should not be empty.');
        }

        else
            error.text('');

        var filled = isFilled();
        var validPName = isValidPName(field);
        var validPDesc = isValidPDesc(field);
        var validPPrice = isValidPPrice(field);

        if(filled && validPPrice && validPDesc && validPName)
            $('#btnedit').prop('disabled', false);
        else
            $('#btnedit').prop('disabled', true);

        /*
        start of valid pnum
        */            
    }

    /*
    start of keyup
    */
    $('#pdesc').keyup(function () {
        validateField($('#pdesc'), 'Product Description', $('#pdescerror'));
    });

    $('#pname').keyup(function () {
        validateField($('#pname'), 'Product Name', $('#pnameerror'));
    });

    $('#pprice').keyup(function () {
        validateField($('#pprice'), 'Product Price', $('#ppriceerror'));
    });

});