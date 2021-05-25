$(document).ready(function (){

    var userName = document.getElementById("user").innerHTML;
    var pNum = document.getElementById("pnumber").innerHTML.substring("Product Number: ".length);

    $.get('/checkWish', {userName: userName, pNum: pNum}, function (result) {
        
        if(result.userName.equals(userName) && result.pNum.equals(pNum)) {
            $('#btnwishlist').css('color', 'rgb(250, 74, 74)');
        } else {
            $('#btnwishlist').css('color', 'black; ');

        }
    })

    $('#btnwishlist').click(function () {
        var userName = document.getElementById("user").innerHTML;
        var pNum = document.getElementById("pnumber").innerHTML.substring("Product Number: ".length);
        var pName = document.getElementById("pname").innerHTML;
        var pImage = ".." + document.getElementById("main_prod_image1").src.substring("http://localhost:3000".length);  
        var pPrice = document.getElementById("pprice").innerHTML.substring("P ".length);
        var pQty = document.getElementById("qty").value;

        alert("Added to Wishlist!");
        if (userName != "") {
            var item = {
                userName: userName,
                pNum: pNum,
                pName: pName,
                pImage: pImage,
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
        var pImage = ".." + document.getElementById("main_prod_image1").src.substring("http://localhost:3000".length);  
        var pPrice = document.getElementById("pprice").innerHTML.substring("P ".length);
        var pQty = document.getElementById("qty").value;


        alert("Added to Cart!");
        if (userName != "") {
            var item = {
                userName: userName,
                pNum: pNum,
                pName: pName,
                pImage: pImage,
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