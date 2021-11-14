class GRADE1{
  avg:number;
  total:number; 
}
let c1 = 0;
var grad = new GRADE1();
grad.total=0;
grad.avg=0;
const btn3 = document.getElementById("btn1") as HTMLButtonElement;
btn3.addEventListener("click", cgpa1);
console.log(btn3);

function cgpa1() 
{
  var gpa1 = parseFloat(
    (document.getElementById("a") as HTMLInputElement).value
  );
  var gpa2 = parseFloat(
    (document.getElementById("b") as HTMLInputElement).value
  );
  var gpa3 = parseFloat(
    (document.getElementById("c") as HTMLInputElement).value
  );
  var gpa4 = parseFloat(
    (document.getElementById("d") as HTMLInputElement).value
  );
  var gpa5 = parseFloat(
    (document.getElementById("k") as HTMLInputElement).value
  );
  var gpa6 = parseFloat(
    (document.getElementById("l") as HTMLInputElement).value
  );
  var gpa7 = parseFloat(
    (document.getElementById("m") as HTMLInputElement).value
  );
  var gpa8 = parseFloat(
    (document.getElementById("n") as HTMLInputElement).value
  );
  const gpa = [gpa1, gpa2, gpa3, gpa4, gpa5, gpa6, gpa7, gpa8];
    let i: number;
    for (i = 0; i < gpa.length; i++) {
      if (isNaN(gpa[i])) continue;
      grad.total += gpa[i];
      c1++;
    }

    var avg = grad.total / c1;
    var per=avg*10;
    console.log(avg);
    console.log(per);
    document.getElementById("cgpa").textContent = "CGPA : " + avg;
    document.getElementById("percentage").textContent = "PERCENTAGE: " + per +"%";
  }

