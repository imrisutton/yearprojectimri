//exc 4 targil 2
function DrawImage(index, el) {
    var img = document.createElement("img");
    img.src = "image/"+index +".png";
    img.width = 100;
    img.height = 100;
    el.appendChild(img);
}
function DrawTable(arr) {
    var tables = document.getElementById("table");
    for (var i = 0; i < arr.length; i++) {
        let td = document.createElement("td");
        DrawImage(arr[i], td);
        tables.appendChild(td);
    }
}
//exc 4 targil 7
function buildTable(arr) {
    var table = document.getElementById("3tbl");
    var row1 = document.createElement("tr");
    var row2 = document.createElement("tr");

    for (let i = 0; i < arr.length; i += 3) {
        var text = arr[i];
        var imgSrc = arr[i + 1];
        var size = arr[i + 2];

        var td1 = document.createElement("td");
        row1.appendChild(td1);

        var td2 = document.createElement("td");
        var img = document.createElement("img");
        img.src = imgSrc;
        img.alt = text;
        img.width = (size);
        img.height = (size);
        td2.appendChild(img);
        row2.appendChild(td2);
    }

    table.appendChild(row1);
    table.appendChild(row2);
}

//exc 5 targil 1,2,3
function hide() {
    document.getElementById("img1").style.display = "none";
}
function show() {
    document.getElementById("img1").style.display = "block";
}
function grow() {
    document.getElementById("img2").width += 10;
}
function small() {
    document.getElementById("img2").height -= 10;
}
function swap() {
    var swaptemp = document.getElementById("img3").src;  
    document.getElementById("img3").src = document.getElementById("img4").src;
    document.getElementById("img4").src = swaptemp;  
}