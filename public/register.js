$(document).ready(function (){


    // attach the event keyup to the html element that represents the username 

    $('#username').keyup(function(){

        //send an HTTP GET request to server that points to the function getCheckUsername

        var userName = $('#username').val();



        $.get('/getCheckUsername', {userName: userName}, function(result){

            if(result.userName == userName){
                $('#username').css('background-color', 'blue');
                $('#error').text('Username already exists.');
                $('#submit').prop('disabled', true); // disables the submit button
            }

            else {
                $('#username').css('background-color', '#E3E3E3');
                $('#error').text('');
                $('#submit').prop('disabled', false); // enables the submit button 
            }

        });

    });

});