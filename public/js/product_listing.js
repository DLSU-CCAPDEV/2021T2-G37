$(document).ready(function (){

    $('#btnwishlist').click(function () {
        var userName = document.getElementById("user").innerHTML;
        var pNum = document.getElementById("pnumber").innerHTML.substring("Product Number: ".length);
        var pName = document.getElementById("pname").innerHTML;
        var pImage = ".." + document.getElementById("main_prod_image1").src.substring("http://localhost:3000".length);  
        var pPrice = document.getElementById("pprice").innerHTML.substring("P ".length);
        var pQty = document.getElementById("qty").value;

        if (userName != "") {

            alert("Added to Wishlist!");
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

        if (userName != "") {

            alert("Added to Cart!");
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