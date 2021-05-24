$(document).ready(function (){

    $('#btnwishlist').click(function () {
        var userName = req.session.userName;
        var pNum = document.getElementById("pnumber").innerHTML.substring("Product Number: ".length);
        var pName = document.getElementById("pname").innerHTML;
        var pPrice = document.getElementById("pprice").innerHTML.substring("P ".length);
        var pQty = document.getElementById("qty").value;

        var item = {
            userName: userName,
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQty: pQty
        } 
        
        $.get('/getAddWishlist', item);
    });

    $('#btncart').click(function () {
        var userName = req.session.userName;
        var pNum = document.getElementById("pnumber").innerHTML.substring("Product Number: ".length);
        var pName = document.getElementById("pname").innerHTML;
        var pPrice = document.getElementById("pprice").innerHTML.substring("P ".length);
        var pQty = document.getElementById("qty").value;

        var item = {
            userName: userName,
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQty: pQty
        }

        $.get('/getAddCart', item);
    });
});