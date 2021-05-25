$(document).ready(function (){
    $('.buttons').on('click', '.add-cart', function () {
        var userName = window.location.href.substring("http://localhost:3000/wishlist/".length);
        var pNum = $(this).parent().parent().attr('id');
        var pName = $(this).parent().prev().prev().children()[0];
        var pPrice = $(this).parent().parent().children()[2];
        var pImage = ".." + $(this).parent().parent().children()[0].src.substring("http://localhost:3000".length);  
        var pQty = 1;

        var wish = {
            userName: userName,
            pNum: pNum,
            pName: pName.innerHTML,
            pPrice: pPrice.innerHTML.substring("P ".length),
            pImage: pImage,
            pQty: pQty
        }

        $.get('/addToCart', wish);
        window.location.reload();
    });

    $('.buttons').on('click', '.delete', function () {
        var userName = window.location.href.substring("http://localhost:3000/wishlist/".length);
        var pNum = $(this).parent().parent().attr('id');

        var wish = {
            userName: userName,
            pNum: pNum
        }

        $.get('/deleteWish', wish);
        window.location.reload();
    });

    $('#add-all').click(function () {
        $.get('/addAlltoCart');

    });
})