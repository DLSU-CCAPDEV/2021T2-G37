
$(document).ready(function () {

    function isFilled() {
        var pNum = validator.trim($('#pnum').val());

        var pNumEmpty = validator.isEmpty(pNum);

        return !pNumEmpty;
    }

    /* 
    start of validation 
    */
    function isValidPNum(field, callback) {
        var pNum = validator.trim($('#pnum').val());
        var isValidLength = validator.isLength(pNum, {min: 6});

        if(isValidLength){
            $.get('/getCheckNumDelete', {pNum: pNum}, function (result) {

                if(result.pNum == pNum) {
                       if(field.is($('#pnum')))
                           $('#pnumerror').text('');
               
                       return callback(true);
           
                   }
           
                   else {
                       if(field.is($('#pnum')))
                           $('#pnumerror').text('Product Number does not exist.');
           
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

        /*
        start of valid pnum
        */
        isValidPNum(field, function (validPNum) {
            if(filled && validPNum)
                $('#btndelete').prop('disabled', false);
            else
                $('#btndelete').prop('disabled', true);
        });
    }

    /*
    start of keyup
    */
    $('#pnum').keyup(function () {
        validateField($('#pnum'), 'Product Number', $('#pnumerror'));
    });

});