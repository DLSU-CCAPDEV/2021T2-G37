
$(document).ready(function () {

    function isFilled() {
        var pNum = validator.trim($('#pnum').val());
        var pName = validator.trim($('#pname').val());
        var pPrice = validator.trim($('#pprice').val());
        var pDesc = validator.trim($('#pdesc').val());

        var pNumEmpty = validator.isEmpty(pNum);
        var pNameEmpty = validator.isEmpty(pName);
        var pPriceEmpty = validator.isEmpty(pPrice);
        var pDescEmpty = validator.isEmpty(pDesc);

        return !pNumEmpty && !pNameEmpty && !pDescEmpty && !pPriceEmpty;
    }

    /* 
    start of validation 
    */
    function isValidPNum(field, callback) {
        var pNum = validator.trim($('#pnum').val());
        var isValidLength = validator.isLength(pNum, {min: 6});

        if(isValidLength){
            $.get('/getCheckNumAdd', {pNum: pNum}, function (result) {

                if(result.pNum != pNum) {
                       if(field.is($('#pnum')))
                           $('#pnumerror').text('');
           
                           
                       return callback(true);
           
                   }
           
                   else {
                       if(field.is($('#pnum')))
                           $('#pnumerror').text('Product Number already exists.');
           
                       return callback(false);
                   }
               });
        }
        else {
            
            if(field.is($('#pnum')))
                $('#pnumerror').text('Product Number should be at least 6 characters.');
             
                return callback(false);
            }
    }

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
        var validPPrice = isValidPPrice(field);
        var validPDesc = isValidPDesc(field);


        /*
        start of valid pnum
        */
        isValidPNum(field, function (validPNum) {
            if(filled && validPNum && validPName && validPPrice && validPDesc)
                $('#btnadd').prop('disabled', false);
            else
                $('#btnadd').prop('disabled', true);
        });
    }

    /*
    start of keyup
    */
    $('#pnum').keyup(function () {
        validateField($('#pnum'), 'Product Number', $('#pnumerror'));
    });

    $('#pprice').keyup(function () {
        validateField($('#pprice'), 'Product Price', $('#ppriceerror'));
    });

    $('#pname').keyup(function () {
        validateField($('#pname'), 'Product Name', $('#pnameerror'));
    });

    $('#pdesc').keyup(function () {
        validateField($('#pdesc'), 'Product Description', $('#pdescerror'));
    });

});