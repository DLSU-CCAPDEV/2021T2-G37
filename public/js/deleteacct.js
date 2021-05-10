$(document).ready(function (){
    $("#delete").click(function() {
        $.get('/deleteacct', function(){
            alert('Successfully deleted!');
        });
    });
});