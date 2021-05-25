$(document).ready(function (){
    $('#wish').on('click', '.thumbnail', function () {

        var partial = $(this).prev();
        var pNum = {
            pNum: partial
        }

        $.get('/product_listing');
    });

    $('.buttons').on('click', '.add-cart', function () {
        var userName = req.session.userName;
        var pNum = $(this).parent().parent().attr('id');
        var pName = $(this).parent().prev().prev().children()[0];
        var pPrice = $(this).parent().prev();

        var wish = {
            userName: userName,
            pNum: pNum,
            pName: pName.innerHTML,
            pPrice: pPrice.innerHTML,
            pQty: pQty
        }

        $.get('/addToCart', wish);
        window.location.reload();
    });

    $('.buttons').on('click', '.delete', function () {
        var pNum = $(this).parent().parent().attr('id');

        $.get('/deleteWish', pNum);
        window.location.reload();
    });

    $('#add-all').click(function () {
        $.get('/addAlltoCart');

    });
})