function checkans() {
    var n1 = document.getElementById("num").value;
    alert(n1);
}
function random() {
    var n1rnd = parseInt(Math.random() * 10) + 1;
    var n2rnd = parseInt(Math.random() * 10) + 1;
    document.getElementById("numrnd").value = n1rnd;
    document.getElementById("numrnd2").value = n2rnd;
}
    function calc() {
        var sol = parseInt(document.getElementById("solve").value);
        var n1 = parseInt(document.getElementById("numrnd").value);
        var n2 = parseInt(document.getElementById("numrnd2").value);

        if (n1 + n2 == sol) {
            document.getElementById("span1").innerHTML = "כל הכבוד";
        }
        else {
            document.getElementById("span1").innerHTML = "טעות";
        }

    }

function reroll() {
    var r1 = parseInt(Math.random() * 100) + 1;
    var r2 = parseInt(Math.random() * 100) + 1;
    var r3 = parseInt(Math.random() * 100) + 1;
    var r4 = parseInt(Math.random() * 100) + 1;
    var r5 = parseInt(Math.random() * 100) + 1;
    var r6 = parseInt(Math.random() * 100) + 1;
    var r7 = parseInt(Math.random() * 100) + 1;
    var r8 = parseInt(Math.random() * 100) + 1;
    var r9 = parseInt(Math.random() * 100) + 1;
    var r10 = parseInt(Math.random() * 100) + 1;
    document.getElementById("plus1").value = r1;
    document.getElementById("plus2").value = r2;
    document.getElementById("minus1").value = r3;
    document.getElementById("minus2").value = r4;
    document.getElementById("multi1").value = r5;
    document.getElementById("multi2").value = r6;
    document.getElementById("div1").value = r7;
    document.getElementById("div2").value = r8;
    document.getElementById("leftdiv1").value = r9;
    document.getElementById("leftdiv2").value = r10;
}
function check() {
    var sol1 = parseInt(document.getElementById("ans1").value);
    var n1 = parseInt(document.getElementById("plus1").value);
    var n2 = parseInt(document.getElementById("plus2").value);
    var sol2 = parseInt(document.getElementById("ans2").value);
    var n3 = parseInt(document.getElementById("minus1").value);
    var n4 = parseInt(document.getElementById("minus2").value);
    var sol3 = parseInt(document.getElementById("ans3").value);
    var n5 = parseInt(document.getElementById("multi1").value);
    var n6 = parseInt(document.getElementById("multi2").value);
    var sol4 = parseInt(document.getElementById("ans4").value);
    var n7 = parseInt(document.getElementById("div1").value);
    var n8 = parseInt(document.getElementById("div2").value);
    var sol5 = parseInt(document.getElementById("ans5").value);
    var n9 = parseInt(document.getElementById("leftdiv1").value);
    var n10= parseInt(document.getElementById("leftdiv2").value);

    if (n1 + n2 == sol1) {
        document.getElementById("span2").innerHTML = "כל הכבוד";
    }
    else {
        document.getElementById("span2").innerHTML = "טעות";
    }
    if (n3 - n4 == sol2) {
        document.getElementById("span3").innerHTML = "כל הכבוד";
    }
    else {
        document.getElementById("span3").innerHTML = "טעות";
    }
    if (n5 * n6 == sol3) {
        document.getElementById("span4").innerHTML = "כל הכבוד";
    }
    else {
        document.getElementById("span4").innerHTML = "טעות";
    }
    if (n7 / n8 == sol4) {
        document.getElementById("span5").innerHTML = "כל הכבוד";
    }
    else {
        document.getElementById("span5").innerHTML = "טעות";
    }
    if (n9 % n10 == sol5) {
        document.getElementById("span6").innerHTML = "כל הכבוד";
    }
    else {
        document.getElementById("span6").innerHTML = "טעות";
    }
}
