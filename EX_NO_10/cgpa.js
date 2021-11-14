var GRADE1 = /** @class */ (function () {
    function GRADE1() {
    }
    return GRADE1;
}());
var c1 = 0;
var grad = new GRADE1();
grad.total = 0;
grad.avg = 0;
var btn3 = document.getElementById("btn1");
btn3.addEventListener("click", cgpa1);
console.log(btn3);
function cgpa1() {
    var gpa1 = parseFloat(document.getElementById("a").value);
    var gpa2 = parseFloat(document.getElementById("b").value);
    var gpa3 = parseFloat(document.getElementById("c").value);
    var gpa4 = parseFloat(document.getElementById("d").value);
    var gpa5 = parseFloat(document.getElementById("k").value);
    var gpa6 = parseFloat(document.getElementById("l").value);
    var gpa7 = parseFloat(document.getElementById("m").value);
    var gpa8 = parseFloat(document.getElementById("n").value);
    var gpa = [gpa1, gpa2, gpa3, gpa4, gpa5, gpa6, gpa7, gpa8];
    var i;
    for (i = 0; i < gpa.length; i++) {
        if (isNaN(gpa[i]))
            continue;
        grad.total += gpa[i];
        c1++;
    }
    var avg = grad.total / c1;
    var per = avg * 10;
    console.log(avg);
    console.log(per);
    document.getElementById("cgpa").textContent = "CGPA : " + avg;
    document.getElementById("percentage").textContent = "PERCENTAGE: " + per + "%";
}
