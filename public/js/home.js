var content = document.getElementById("content");
const db = require('../models/db.js');

// for drop down menu
function dropdownToggle(){
    document.getElementById('dropmenu').classList.toggle('active'); //clicking the account icon makes it appear, clicking it again makes it disappear.
}

// display products in page
$(document).ready(function (){
    
    function displayProd (product) {
        // a, div, span, span, /a
        var newLink = document.createElement("a");
        var newImg = document.createElement("div");
        var newName = document.createElement("span");
        var newPrice = document.createElement("span");

        newName.appendChild(document.createTextNode(product.prodName));
        newPrice.appendChild(document.createTextNode(products.prodPrice));
    
        newLink.appendChild(newName);
        newLink.appendChild(newPrice);

        content.appendChild(newLink);
    }

    db.findMany('Products', '', function(result){
        if (result != null){
            for (var i = 0; i < result.length; i++) {
                displayProd(result[i]);
            }
        }
    });
})