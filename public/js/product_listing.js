$(document).ready(function (){

    $('#btnwishlist').click(function () {
        var pNum = document.getElementById("pnumber").innerHTML.substring("Product Number: ".length);
        var pName = document.getElementById("pname").innerHTML;
        var pPrice = document.getElementById("pprice").innerHTML.substring("P ".length);
        var pQty = document.getElementById("qty").value;

        var item = {
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQty: pQty
        } 
        
        $.get('/getAddWishlist', item);
    });

    $('#btncart').click(function () {
        var pNum = document.getElementById("pnumber").innerHTML.substring("Product Number: ".length);
        var pName = document.getElementById("pname").innerHTML;
        var pPrice = document.getElementById("pprice").innerHTML.substring("P ".length);
        var pQty = document.getElementById("qty").value;

        var item = {
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQty: pQty
        }

        $.get('/getAddCart', item);
    });
});