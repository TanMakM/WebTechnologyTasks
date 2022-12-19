var button = document.getElementById('btn');
var body = document.getElementsByTagName('body');
var footer = document.getElementById('footer_id');
var header = document.getElementById('header_id');
var a = 0;

button.onclick = function () 
{
    if (a == 1) {
        body[0].style.background = "#383333";
        footer.style.background = "#3a082d";
        header.style.background = "#3a082d";
        a = 0;
    }
    else if (a == 0) {
        body[0].style.background = "#ff00f2";
        footer.style.background = "lightgreen";
        header.style.background = "lightgreen";
        a = 1;
    }
}
