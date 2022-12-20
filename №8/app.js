var button = document.getElementById('btn');
var body = document.body;
var footer = document.getElementById('foot');
var li = document.getElementsByTagName('li');
var main = document.getElementById('ff');
var header = document.getElementById('head');

console.log(body);

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

function qwe(content){
    let request = new XMLHttpRequest;
    request.open('GET', content, true)
    request.send()
    request.onreadystatechange = function () 
    {
        if (request.readyState !== 4)
        if (request.status !== 200) 
        {
            main.innerHTML = request.responseText;
        }
    }
}

window.onload = function()
{
    alert (<a href="./index.html">Возврат на главную страницу</a>);
}




li[1].onclick = ()=>{
    qwe('bio.html');
}
li[2].onclick = ()=>{
    qwe('rezume.html');
}
li[3].onclick = ()=>{
    qwe('portfolio.html');
}
li[4].onclick = ()=>{
    qwe('contacts.html');
}