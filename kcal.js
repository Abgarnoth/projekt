let wiek ;
let wzrost ;
let waga ;
let wynikA;
let wynikB;
const men = document.getElementById("male");
const women = document.getElementById("female");
var selectedValue ;



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

   document.getElementById("wynik").textContent = "Twoja podaż kaloryczna wynosi     " + Math.round(wynikB) + " kcal dziennie";
}
function getSelectValue(){
  selectedValue = document.getElementById("tryb").value;
  
}
  