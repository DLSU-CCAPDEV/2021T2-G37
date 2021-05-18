$(document).ready(function (){


    // attach the event keyup to the html element that represents the product number

    $('#pnum').keyup(function(){

        //send an HTTP GET request to server that points to the function getCheckProdNum

        var pNum = $('#pnum').val();
        console.log(pNum);

        if (pNum == '') {
            $('#error').text('');
        }
        else{
            $.get('/getCheckNumDelete', {pNum: pNum}, function(result){

                if(result.pNum == pNum ){
                    $('#pnum').css('background-color', '#E3E3E3');
                    $('#error').text('');
                    $('#btndelete').prop('disabled', false); // enables the add button
                    alert("Successfully deleted " + pNum); 
                }

                else {
                    $('#pnum').css('background-color', 'blue');
                    $('#error').text('Product number does not exist.');
                    $('#btndelete').prop('disabled', true); // disables the add button
                }

            });
        }

    });

});