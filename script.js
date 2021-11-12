//link1
document.getElementById("link1").onmouseover = function () { mouseOver("link1") };
document.getElementById("link1").onmouseout = function () { mouseOut("link1") };
//link2
document.getElementById("link2").onmouseover = function () { mouseOver("link2") };
document.getElementById("link2").onmouseout = function () { mouseOut("link2") };
//link3
document.getElementById("link3").onmouseover = function () { mouseOver("link3") };
document.getElementById("link3").onmouseout = function () { mouseOut("link3") };
//link4
document.getElementById("link4").onmouseover = function () { mouseOver("link4") };
document.getElementById("link4").onmouseout = function () { mouseOut("link4") };
//link5
document.getElementById("link5").onmouseover = function () { mouseOver("link5") };
document.getElementById("link5").onmouseout = function () { mouseOut("link5") };

//change text to red when mouseover
function mouseOver(link) {
    document.getElementById(link).style.color = "red";
}
//change text to white when not mouseover
function mouseOut(link) {
    document.getElementById(link).style.color = "white";
}