// for drop down menu
function dropdownToggle(){
    document.getElementById('dropmenu').classList.toggle('active'); //clicking the account icon makes it appear, clicking it again makes it disappear.
}

$(document).ready(function (){
    $('#content').on('click', '.thumbnail', function () {

        var partial = $(this).prev();
        var pnum = {
            pNum: partial.innerHTML
        }
        alert(1);
        redirect('/product_listing?pNum=' + pnum);
    });

})