//targil 1
function Drawlink() {
    var div = document.getElementById("el");
    var aEl = document.createElement("a");
    aEl.setAttribute("href", "1.html");
    aEl.innerHTML = "קישור לאתר וואלה";
    aEl.setAttribute("style", "color: red;");
    div.appendChild(aEl);
}
//targil 2
function DrawImage() {
    var div = document.getElementById("el");
    var img = document.createElement("img")
    img.setAttribute("src", "image/1.png");
    img.setAttribute("width", "200px");
    img.setAttribute("height", "200px");
    div.appendChild(img);
}
//targil 3
function DrawImage3(imgindex) {
    var div = document.getElementById("el");
    var img = document.createElement("img");
    img.setAttribute("src", "image/" + imgindex + ".png");
    img.setAttribute("width", "200px");
    img.setAttribute("height", "200px");
    div.appendChild(img);
}

//targil 4
function DrawImage4(imgindex, imgHeight, imgWidth,el) {
    var img = document.createElement("img")
    img.setAttribute("src", "image/" + imgindex + ".png");
    img.setAttribute("width", imgWidth + "px");
    img.setAttribute("height", imgHeight + "px");
    el.appendChild(img);
}


//targil 5
function DrawSomeImages(num) {
    var div = document.getElementById("el")
    for (var i = 1; i <= num; i++)
    {
        DrawImage3(i);
    }

}
//targil 6
function DrawLink6(linkIndex, el) {
    el.setAttribute("href", linkIndex+".html");
    el.innerHTML = "קישור לדף " + linkIndex;
    el.setAttribute("style", "color: red;");
}
function DrawSomeLinks6() {
    
    for (var i = 1; i <= 5; i++) {
        var e = document.createElement('a');
        DrawLink6(i,e);
    }
}
//targil 7
function DrawRow(rowIndex, imgHeight, imgWidth, el) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var td2 = document.createElement('td');
    var a = document.createElement('a');
    DrawLink6(rowIndex, a);
    DrawImage4(rowIndex, imgHeight, imgWidth, td);
    td2.appendChild(a);
    tr.appendChild(td);
    tr.appendChild(td2);
    el.appendChild(tr);
}
function DrawTable(rows) { 
    for (var i = 1; i <= rows; i++) {
        var table = document.createElement('table');
        DrawRow(i, 200, 200, table);
    }

}
//targil 8
function SumTwoValues(x,y) {
    var sum = x + y;
    return sum;
}
function SumTwoValuesinput() {
    var n1 = parseInt(prompt("Please enter a number"));
    var n2 = parseInt(prompt("Please enter a number"));
    var sum = SumTwoValues(n1, n2)
    var div = document.getElementById("el");
    div.innerHTML=sum;
}
//targil 9
function iseven(x) {
    return x % 2 === 0;
}
function iseventest() {
    var n1 = parseInt(prompt("הכנס מספר"));
    var t = iseven(n1);
    var div = document.getElementById("el");
    div.innerText = t;
}
//targil 10
function IsAInEnd(str) {
    var len = str.length;
    return str[len - 1] == 'A';
}

function isAInEndtest() {
    var n1 = prompt("הכנס מחרוזת");
    var t = IsAInEnd(n1);
    var div = document.getElementById("el");
    div.innerText = t;
}
//targil 11
function FindDifference(x, y) {
    var xy = Math.abs(x-y)
    return xy;
}

function FindDifferencetest(){
    var n1 = parseInt(prompt("הכנס מספר"));
    var n2 = parseInt(prompt("הכנס מספר"));
    var t = FindDifference(n1, n2)
    var div = document.getElementById("el");
    div.innerText = t;
}
//targil 12
function SumEvenValuesUpToX(x) {
    var sumeven = 0;
    for (var i = 1; i < x; i++) {
        if (i % 2 == 0) { sumeven = sumeven + i; }
    }
    return sumeven;
}
function SumEvenValuesUpToXtest() {
    var n1 = parseInt(prompt("הכנס מספר"));
    var t = SumEvenValuesUpToX(n1);
    var div = document.getElementById("el");
    div.innerText = t;
}
//targil 13
function FindMaxValue(x){
    var max = n1 = parseInt(prompt("הכנס מספר"));;
    for (var i = 1; i < x; i++) {
        n1 = parseInt(prompt("הכנס מספר"));
        if (n1 > max) { max = n1; }
    }
    return max;
}
function FindMaxValuetest() {
    var n1 = parseInt(prompt("הכנס מספר"));
    var t = FindMaxValue(n1);
    var div = document.getElementById("el");
    div.innerText = t;
}
//targil 14
function FindExtremesDifference(x) {
    var max = n1 = parseInt(prompt("הכנס מספר"));
    var min = max
    for (var i = 1; i < x; i++) {
        n1 = parseInt(prompt("הכנס מספר"));
        if (n1 > max) { max = n1; }
        if (min > n1) { min = n1; }
    }
    return max - min;
}
function FindExtremesDifferencetest() {
    var n1 = parseInt(prompt("הכנס מספר"));
    var t = FindExtremesDifference(n1);
    var div = document.getElementById("el");
    div.innerText = t;
}
//targil 15
function ConcatStrings(x) {
    var longstr=""
    for (var i = 0; i < x; i++) {
        str = prompt("הכנס מחרוזת");
        longstr = longstr+ str+" "
    }
    return longstr;
}
function ConcatStringstest() {
    var n1 = parseInt(prompt("הכנס מספר"));
    var t = ConcatStrings(n1);
    var div = document.getElementById("el");
    div.innerText = t;
}
