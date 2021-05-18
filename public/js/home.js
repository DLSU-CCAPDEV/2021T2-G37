var content = document.getElementById("content");
const db = require('../models/db.js');

// for drop down menu
function dropdownToggle(){
    document.getElementById('dropmenu').classList.toggle('active'); //clicking the account icon makes it appear, clicking it again makes it disappear.
}

// display products in page
$(document).ready(function (){
/*    $('#product').on('click', '.thumbnail', function () {
        var partial = $(this).prev().children()[1];
        var pname = {
            pName: partial.innerHTML
        }

//        redirect('/productlisting?pName=' + pName);

        window.location.reload();
    });
*/
})s