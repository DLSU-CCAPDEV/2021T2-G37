$(document).ready(function (){


    $('#btnwishlist').click(function () {
        var userName = document.getElementById("user").innerHTML;
        var pNum = document.getElementById("pnumber").innerHTML.substring("Product Number: ".length);
        var pName = document.getElementById("pname").innerHTML;
        var pPrice = document.getElementById("pprice").innerHTML.substring("P ".length);
        var pQty = document.getElementById("qty").value;

        alert(1);

        if (userName != "") {
            var item = {
                userName: userName,
                pNum: pNum,
                pName: pName,
                pPrice: pPrice,
                pQty: pQty
            } 
            
            $.get('/getAddWishlist', item);
        } 
        else {
            $.get('/login');
        }

    });

    $('#btncart').click(function () {
        var userName = document.getElementById("user").innerHTML;
        var pNum = document.getElementById("pnumber").innerHTML.substring("Product Number: ".length);
        var pName = document.getElementById("pname").innerHTML;
        var pPrice = document.getElementById("pprice").innerHTML.substring("P ".length);
        var pQty = document.getElementById("qty").value;

        alert(2);
        if (userName != "") {
            var item = {
                userName: userName,
                pNum: pNum,
                pName: pName,
                pPrice: pPrice,
                pQty: pQty
            }
    
            $.get('/getAddCart', item);
        } 
        else {
            $.get('/login');
        }
    });
});