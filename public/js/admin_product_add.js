$(document).ready(function (){


    // attach the event keyup to the html element that represents the product number

    $('#pnum').keyup(function(){

        //send an HTTP GET request to server that points to the function getCheckProdNum

        var pNum = $('#pnum').val();



        $.get('/getCheckUsername', {pNum: pNum}, function(result){

            if(result.pNum == pNum){
                $('#username').css('background-color', 'blue');
                $('#error').text('Product number already exists.');
                $('#submit').prop('disabled', true); // disables the add button
            }

            else {
                $('#username').css('background-color', '#E3E3E3');
                $('#error').text('');
                $('#btnadd').prop('disabled', false); // enables the add button 
            }

        });

    });

});