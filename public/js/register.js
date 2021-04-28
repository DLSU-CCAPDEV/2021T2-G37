$(document).ready(function (){


    // attach the event keyup to the html element that represents the username 

    $('#username').keyup(function(){

        //send an HTTP GET request to server that points to the function getCheckUsername

        var userName = $('#username').val();
        console.log(userName);

        $.get('/getCheckUsername', {userName: userName}, function(result){

            if(result.userName == userName){
                $('#username').css('background-color', '#BC544B');
                $('#error').text('Username is already taken.');
                $('#submit').prop('disabled', true); // disables the submit button
            }

            else {
                $('#username').css('background-color', '#E6E2DD');
                $('#error').text('');
                $('#submit').prop('disabled', false); // enables the submit button 
            }

        });

    });

});