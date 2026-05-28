//targil 1
function arrwithn(n) {
    var arr=[];
    for (var i = 0; i < n; i++) {
        arr[i] = i;
    }
    alert(arr);
}

//targil 2
function DrawImage(index, el) {
    var img = document.createElement("img");
    img.src = "Images/" + index + ".png";
    img.width = 100;
    img.height = 100;
    el.appendChild(img);
}

arrwithn(4)