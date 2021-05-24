$(document).ready(function (){
    $('#container').on('click', '.thumbnail', function () {

        var partial = $(this).attr('id');
        var pNum = {
            pNum: partial.innerHTML
        }

        alert(1);
        $.get('/product_listing');
    });

})