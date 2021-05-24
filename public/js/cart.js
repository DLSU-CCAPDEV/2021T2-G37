$(document).ready(function (){
    $('.buttons').on('click', '.delete', function () {

        var pNum = $(this).parent().parent().attr('id');

        var item = {
            pNum: pNum
        }

        $.get('/deleteItem', pNum);
        window.location.reload();
    });
}