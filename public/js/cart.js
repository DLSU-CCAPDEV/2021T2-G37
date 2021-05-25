$(document).ready(function (){
    $('.buttons').on('click', '.delete', function () {
        var userName = req.session.userName;
        var pNum = $(this).parent().parent().attr('id');

        var item = {
            userName: userName,
            pNum: pNum
        }

        $.get('/deleteItem', item);

    });

});