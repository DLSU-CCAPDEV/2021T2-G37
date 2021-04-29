$(document).ready(function (){


    // attach the event keyup to the html element that represents the username 

    $('#loginbtn').click(function(){

        var checkresult = false;

        //send an HTTP GET request to server that points to the function getCheckUsername

        var userName = $('#username').val();
        //console.log(userName);

        $.post('/login', {userName: userName}, function(result){

            if(result.userName == userName){
                // $('#username').css('background-color', '#BC544B');
                // $('#error').text('Username is already taken.');
                // $('#submit').prop('disabled', true); // disables the submit button
                checkresult = true;
            }

            else {
                $('#error').text('"You are not yet registered!');
                $('#loginbtn').prop('disabled', false); // enables the submit button 
            }

        });
    });

});