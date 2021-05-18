$(document).ready(function (){



    /*
        returns true if all the fields are not empty, otherwise 
        returns false. 

        trims leading and trailing blank spaces first then checks
        if the values are not empty 
    */
    function checkFilled() {


        /*
            get the value of a specific field then remove leading 
            and trailing blank spaces 
        */
        var fullName = validator.trim($('#fullname').val());
        var userName = validator.trim($('#username').val());
        var email = validator.trim($('#email').val());
        var pw = validator.trim($('#password').val());
        var deladdr = validator.trim($('#deladdr').val());
        var contactnum = validator.trim($('#contactnum').val());

        /*
            checks if the trimmed values are not empty 
        */

        var fullNameEmpty = validator.isEmpty(fullName);
        var userNameEmpty = validator.isEmpty(userName);
        var emailEmpty = validator.isEmpty(email);
        var pwEmpty = validator.isEmpty(pw);
        var delAddrEmpty = validator.isEmpty(deladdr);
        var contactnumEmpty = validator.isEmpty(contactnum);

        return !fullNameEmpty && !userNameEmpty && !emailEmpty && !pwEmpty && !delAddrEmpty && !contactnumEmpty;

    }

    /*
        returns true if the value of contactnum is a valid contact number, otherwise
        returns false. 

        contact number must contain exactly 11 digits and has not been used 
        by other users yet 

        field - refers to the current <input> field calling this function 
        callback - function called after the execution of isValidContactNum()

    */

    function isValidContactNum(field, callback) {

        /*
            get the value of contactnum in the register form, remove
            leading and trailing blank spaces then check if it contains
            exactly 11 digits

        */
        var contactnum = validator.trim($('#contactnum').val());
        var isValidLength = validator.isLength(contactnum, {min: 11, max: 11});
        
        if (isValidLength){
            $.get('/getCheckContactNum', {contactnum: contactnum}, function(result){
                
                if(result.contactnum != contactnum){
                    
                    if(field.is($('#contactnum')))
                        $('#contactnumErr').text(''); //remove the error if it does not exist in the database
                    return callback(true);

                }

                else {

                    if(field.is($('#contactnum')))
                         // display appropriate error message in contactnumErr
                        $('#contactnumErr').text('Contact Number already registered.');
                    return callback(false);
                }

            })
        }

        //value of contactnum is less or more than 11 digits
        else {
            
            if(field.is($('#contactnum')))
             $('#contactnumErr').text('Contact Number should contain 11 digits.');
             return callback(false);
        }

    }

    function isUniqueUsername(field){

        var userName = validator.trim($('#username').val());
        var validusername = false;

        // console.log(userName);

        $.get('/getCheckUsername', {userName: userName}, function(result){

            if(result.userName == userName){

                if(field.is($('#username'))){
                    $('#username').css('background-color', '#BC544B');
                    $('#error').text('Username is already taken.');
                }
            }

            else {
                if(field.is($('#username'))){
                    $('#username').css('background-color', '#E6E2DD');
                    $('#error').text('');
                }
             
                validusername = true;
            }
        });

        return validusername;
    }

    function isUniqueEmail(field){

        var email = validator.trim($('#email').val());
        var validemail = false;

    
        $.get('/getCheckEmail', {email: email}, function(result){

            if(result.email == email){

                if(field.is($('#email'))){
                    $('#email').css('background-color', '#BC544B');
                    $('#error2').text('Email is already in use.');
                }
           
            }

            else {
                if(field.is($('#email'))){
                    $('#email').css('background-color', '#E6E2DD');
                    $('#error2').text('');
                    validemail = true;
                }
            }
        });
        
        return validemail;
    }

    function isPasswordValid(field){

        var validpw = false;

        var pw = validator.trim($('#password').val());
        var isValidLength = validator.isLength(pw, {min: 10});

        if (isValidLength){
            if (field.is($('#password')))
                $('#passwordErr').text('');
            
            validpw = true;
        }

        else {
            if(field.is($('#password'))){
                $('#passwordErr').text('Passwords should contain at least 10 characters.');
            }
        }

        return validpw;
    }

    function isDelAddrValid(field) {

        var validaddr = false;

        var deladdr = validator.trim($('#deladdr').val());
        var isValidLength = validator.isLength(deladdr, {min: 15});

        if (isValidLength){
            if (field.is($('#deladdr')))
                $('#deladdrErr').text('');
            
            validaddr = true;
        }

        else {
            if(field.is($('#deladdr')))
                $('#deladdrErr').text('Delivery address should be at least 15 characters long.');
        }

        return validaddr;

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

        var validpw = isPasswordValid(field);

        var validusername = isUniqueUsername(field);

        var validaddr = isDelAddrValid(field);

        var validemail = isUniqueEmail(field);

        isValidContactNum(field, function(validcontactnum) {
            if (filled && validpw && validusername && validaddr && validemail && validcontactnum){
                $('#submit').prop('disabled', false);
            }
            
            else {
                $('#submit').prop('disabled', true);
            }
        });
    }


    $('#fullname').keyup(function (){

        checkField($('#fullname'), 'Full Name', $('#fullnameErr'));

    });

    $('#username').keyup(function (){

        checkField($('#username'), 'Username', $('#usernameErr'));

        
    });

    $('#email').keyup(function (){
        
        checkField($('#email'), 'Email address', $('#emailErr'));
    });

    $('#password').keyup(function (){
        
        checkField($('#password'), 'Password', $('#passwordErr'));
    });

    $('#deladdr').keyup(function (){
        
        checkField($('#deladdr'), 'Delivery Address', $('#deladdrErr'));
    });

    $('#contactnum').keyup(function (){
        
        checkField($('#contactnum'), 'Contact Number', $('#contactnumErr'));
    });
});

