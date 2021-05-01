var content = document.getElementById("content");

// for drop down menu
function dropdownToggle(){
    document.getElementById('dropmenu').classList.toggle('active'); //clicking the account icon makes it appear, clicking it again makes it disappear.
}

// display products in page
$(document).ready(function (){
    $.ajax({url: '/setHome', 
        success: function (result) {
            var prods = [];
            for (i = 0; i < result; i++) {
                var prod = {};
                prod.item_name = result[i].get("prodName");
                prod.price = result[i].get("prodPrice");
                prods.push(prod);
            }
        //    console.log(prods);  
        //    $('p').append(data);
        }
    });
})