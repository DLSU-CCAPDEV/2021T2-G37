$(document).ready(function (){

  $('#btncheckout').prop('disabled', true)
    function checkFilled() {


        /*
            get the value of a specific field then remove leading 
            and trailing blank spaces 
        */
        var cardholder = validator.trim($('#cardholder').val());
        var creditcardnum = validator.trim($('#creditcardnum').val());
        var expirymonth = validator.trim($('#expirymonth').val());
        var expiryyear = validator.trim($('#expiryyear').val());
        var cvv = validator.trim($('#cvv').val());

        /*
            checks if the trimmed values are not empty 
        */

        var cardholderEmpty = validator.isEmpty(cardholder);
        var creditcardnumEmpty = validator.isEmpty(creditcardnum);
        var expirymonthEmpty = validator.isEmpty(expirymonth);
        var expiryyearEmpty = validator.isEmpty(expiryyear);
        var cvvEmpty = validator.isEmpty(cvv);

        return !cardholderEmpty && !creditcardnumEmpty && !expirymonthEmpty && !expiryyearEmpty && !cvvEmpty;

    }

    function isCreditCardNumberValid(field){

        var valid = false;

        var creditcardnum = validator.trim($('#creditcardnum').val());
        var isValidLength = validator.isLength(creditcardnum, {min: 19, max: 19});

        if (isValidLength){
            if (field.is($('#creditcardnum')))
                $('#creditcardErr').text('');
            
            valid = true;
        }

        else {
            if(field.is($('#creditcardnum'))){
                $('#creditcardErr').text('Credit Card number should contain 19 characters.');
            }
        }

        return valid;
    }

    
    function isExpiryMonthValid(field){

        var valid = false;

        var expirymonth = validator.trim($('#expirymonth').val());
        var isValidLength = validator.isLength(expirymonth, {min: 1, max: 2});

        if (isValidLength){
            if (field.is($('#expirymonth')))
                $('#expirymonthErr').text('');
            
            valid = true;
        }

        else {
            if(field.is($('#expirymonth'))){
                $('#expirymonthErr').text('Expiry month should contain 1 or 2 digits.');
            }
        }

        return valid;
    }

    function isExpiryYearValid(field){

        var valid = false;

        var expiryyear = validator.trim($('#expiryyear').val());
        var isValidLength = validator.isLength(expiryyear, {min: 2, max: 2});

        if (isValidLength){
            if (field.is($('#expiryyear')))
                $('#expiryyearErr').text('');
            
            valid = true;
        }

        else {
            if(field.is($('#expiryyear'))){
                $('#expiryyearErr').text('Expiry year should contain 2 digits.');
            }
        }

        return valid;
    }

    function iscvvValid(field){

        var valid = false;

        var cvv = validator.trim($('#cvv').val());
        var isValidLength = validator.isLength(cvv, {min: 3, max: 3});

        if (isValidLength){
            if (field.is($('#cvv')))
                $('#cvvErr').text('');
            
            valid = true;
        }

        else {
            if(field.is($('#cvv'))){
                $('#cvvErr').text('CVV should contain 3 digits.');
            }
        }

        return valid;
    }

    function checkField(field, fieldName, error){

        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(empty) {
            field.prop('value', '');
            error.text(fieldName + ' should not be empty.');
        }
         else 
            error.text('');
        
        var filled = checkFilled();
        var validcardnum = isCreditCardNumberValid(field);
        var validmonth = isExpiryMonthValid(field);
        var validyear = isExpiryYearValid(field);
        var validcvv = iscvvValid(field);


        if (filled && validcardnum && validmonth && validyear && validcvv){
            $('#btncheckout').prop('disabled', false)
        }

        else {
            $('#btncheckout').prop('disabled', true)
        }

    }


    $('#cardholder').keyup(function(){
        checkField($('#cardholder'), "Name", $('#cardholderErr'));
    });

    $('#creditcardnum').keyup(function(){
        checkField($('#creditcardnum'), "4444-2222-1111-9999", $('#creditcardErr'));
    });

    $('#expirymonth').keyup(function(){
        checkField($('#expirymonth'), 'Month', $('#expirymonthErr'));
    });
    
    $('#expiryyear').keyup(function(){
        checkField($('#expiryyear'), 'Year', $('#expiryyearErr'));
    });

    $('#cvv').keyup(function(){
        checkField($('#cvv'), "CVV", $('#cvvErr'));
    });
    
});