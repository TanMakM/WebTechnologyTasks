document.getElementById("btn").addEventListener("mouseenter", t);
var flag = 1;

function t()
{
    if (flag == 1) btn.style.left = "500px";
    if (flag == 2) btn.style.top = "600px";
    if (flag == 3) btn.style.left = "0px";
    if (flag == 4) btn.style.top = "0px";
    flag += 1;
    if (flag == 5) flag = 1;
}