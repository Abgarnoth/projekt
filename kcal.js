let wiek ;
let wzrost ;
let waga ;
let wynikA;
let wynikB;
const men = document.getElementById("male");
const women = document.getElementById("female");
var selectedValue ;
let tluszcz ;
let bialko ;
let wegle ;



document.getElementById("button").onclick = function(){

    wiek = document.getElementById("wiek").value;
    wzrost = document.getElementById("wzrost").value;
    waga = document.getElementById("waga").value;
    
   
  if(men.checked){
    wynikA = 66.5 + (13.7 * waga) + (5 * wzrost) - (6.8 * wiek);
  }
  else if(women.checked){
    wynikA = 655 + (9.6 * waga) + (1.85 * wzrost) - (4.7 * wiek);
  }

  wynikB = wynikA * +selectedValue;
  tluszcz = (wynikB * 0.3) / 9;
  bialko = (wynikB ) * 0.15 / 4;
  wegle = (wynikB) * 0.55 / 4;
  document.getElementById("wynik").textContent =   Math.round(wynikB) ;
document.getElementById("1").textContent = Math.round(tluszcz)  ;
document.getElementById("2").textContent = Math.round(bialko)  ;
document.getElementById("3").textContent = Math.round(wegle)  ;
document.getElementById("koniec").style.visibility = "visible";
}   
function getSelectValue(){
  selectedValue = document.getElementById("tryb").value;
 

}


