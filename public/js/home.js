$(document).ready(function (){
    $('#content').on('click', '.thumbnail', function () {

        var partial = $(this).prev();
        var pnum = {
            pNum: partial.innerHTML
        }

        alert(1);
        $.get('/product_listing');
    });

})