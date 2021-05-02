$(document).ready(function (){
    $("#update").click(function () {
        $.get('/editdetails', function(){
            alert('successfully updated')
        });
    });
});