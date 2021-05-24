
$(document).ready(function () {

    function isFilled() {
        var rNum = validator.trim($('#rnum').val());
        var rNumEmpty = validator.isEmpty(rNum);

        return !rNumEmpty;
    }

    /* 
    start of validation 
    */
    function isValidRNum(field, callback) {
        var rNum = validator.trim($('#rnum').val());
        var isValidLength = validator.isLength(rNum, {min: 6});

        if(isValidLength){
            $.get('/getCheckNumCode', {rNum: rNum}, function (result) {

                if(result.rNum == rNum) {
                       if(field.is($('#rnum')))
                           $('#rnumerror').text('');
           
                           
                       return callback(true);
           
                   }
           
                   else {
                       if(field.is($('#rnum')))
                           $('#rnumerror').text(result.rNum + ' Review Number does not exist. ' + rNum);
           
                       return callback(false);
                   }
               });
        }
        else {
            
            if(field.is($('#rnum')))
                $('#rnumerror').text('Review Number should be at least 6 characters.');
             
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
        isValidRNum(field, function (validRNum) {
            if(filled && validRNum)
                $('#btndelete').prop('disabled', false);
            else
                $('#btndelete').prop('disabled', true);
        });
    }

    /*
    start of keyup
    */
    $('#rnum').keyup(function () {
        validateField($('#rnum'), 'Review Number', $('#rnumerror'));
    });

});