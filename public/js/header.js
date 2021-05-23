// for drop down menu
function dropdownToggle(){
    document.getElementById('dropmenu').classList.toggle('active'); //clicking the account icon makes it appear, clicking it again makes it disappear.
}

$(document).ready(function (){

    $('#submit').click(function () {
        alert(2);
        $.get('/search');
    })
    
});