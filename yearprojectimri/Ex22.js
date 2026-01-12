//targil 1
var div = document.getElementById("aElement");
var aEl = document.createElement("a");
aEl.setAttribute("href", "http://www.google.com");
aEl.innerHTML = "GOOGLE";
div.appendChild(aEl);

//targil 2
var div2 =document.getElementById("div2");
var img = document.createElement("img");
img.setAttribute("src", "image/1.png");
img.setAttribute("width", "300px");
img.setAttribute("height", "200px");
div2.appendChild(img);

//targil 3
var div3 = document.getElementById("div3");
var table = document.createElement("table");
var tr = document.createElement("tr");
var td = document.createElement("td");
var tdr = document.createElement("td");
var img1 = document.createElement("img");
img1.setAttribute("src", "image/1.png");
img1.setAttribute("width", "150px");
img1.setAttribute("height", "50px");
var link = document.createElement("a");
link.setAttribute("href", "http://www.google.com");
link.innerHTML = "GOOGLE"
td.appendChild(link);
tdr.appendChild(img1);
tr.appendChild(td);
tr.appendChild(tdr);
table.appendChild(tr);
div3.appendChild(table);

//targil 4-7
var div4 = document.getElementById("div4");
var table2 = document.createElement("table");
n1 = Number(prompt("Enter a number:"));
for (var i = 1; i <= n1; i++)
{
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var img= document.createElement("img");
    img.setAttribute("src", "image/"+i+".png");
    img.setAttribute("width", "150px");
    img.setAttribute("height", "50px");
    var link = document.createElement("a");
    link.setAttribute("href", i+".html");
    link.innerHTML = "קישור לדף " + i
    if (i % 2 == 0)
    {
        td.setAttribute("style", "background-color: red;");
        td2.setAttribute("style", "background-color: red;");
    }
    td.appendChild(link);
    td2.appendChild(img);
    tr.appendChild(td);
    tr.appendChild(td2);
    table2.appendChild(tr);
}
div4.appendChild(table2)