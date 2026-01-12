function Drawlink() {
    var div = document.getElementById("el")
    var aEl = document.createElement("a");
    aEl.setAttribute("href", "1.html");
    aEl.innerHTML = "קישור לאתר וואלה";
    aEl.setAttribute("style", "color: red;");
    div.appendChild(aEl);
}
function DrawImage() {
    var div = document.getElementById("el")
    var img = document.createElement("img")
    img.setAttribute("src", "image/1.png");
    img.setAttribute("width", "200px");
    img.setAttribute("height", "200px");
    div.appendChild(img);
}

function DrawImage3() {
    var div = document.getElementById("el")
    n1 = Number(prompt("Enter a number:"));
    var img = document.createElement("img")
    img.setAttribute("src", "image/" + n1 + ".png");
    img.setAttribute("width", "200px");
    img.setAttribute("height", "200px");
    div.appendChild(img);
}
function DrawImage4() {
    var div = document.getElementById("el")
    n1 = Number(prompt("Enter a number:"));
    width = Number(prompt("Enter a width:"));
    height = Number(prompt("Enter a height:"));
    var img = document.createElement("img")
    img.setAttribute("src", "image/" + n1 + ".png");
    img.setAttribute("width", width+"px");
    img.setAttribute("height", height+"px");
    div.appendChild(img);
}

function DrawSomeImages() {
    var div = document.getElementById("el")
    n2 = Number(prompt("Enter a number:"));
    for (var i = 1; i <= n2; i++)
    {
        DrawImage3();
    }
}
function DrawLink6() {
    var linkindex = 1;
    var div = document.getElementById("el");
    var aEl = document.createElement("a")
    aEl.setAttribute("href", linkindex + ".html");
    aEl.innerHTML = "קישור לדף " + linkindex;
    aEl.setAttribute("style", "color: red;");
    el.appendChild(aEl)
    div.appendChild(el);
}

function DrawSomeLinks6() {
    for (var i = 1; i <= 5; i++) {
        DrawLink6();

    }

}
DrawSomeLinks6();