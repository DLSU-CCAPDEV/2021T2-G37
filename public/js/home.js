var content = document.getElementById("content");

// for drop down menu
function dropdownToggle(){
    document.getElementById('dropmenu').classList.toggle('active'); //clicking the account icon makes it appear, clicking it again makes it disappear.
}

// display products in page
$(document).ready(function (){
    $.ajax('/setHome', {
        success: function ()
    });
}