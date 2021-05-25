$(document).ready(function (){
    $('.buttons').on('click', '.delete', function () {
        var userName = window.location.href.substring("http://localhost:3000/cart/".length);
        var pNum = $(this).parent().attr('id');

        var item = {
            userName: userName,
            pNum: pNum
        }

        $.get('/deleteItem', item);
        window.location.reload();
    });

});