let wiek , wzrost , waga , wynikA , wynikB , tluszcz , bialko , wegle, wynikC;
var selectedValue
const men = document.getElementById("male")
const women = document.getElementById("female")

document.getElementById("oblicz").onclick = function() {
	wiek = document.getElementById("wiek").value
	wzrost = document.getElementById("wzrost").value
	waga = document.getElementById("waga").value

	if (men.checked) {
		wynikA = 66.5 + 13.7 * waga + 5 * wzrost - 6.8 * wiek
	} else if (women.checked) {
		wynikA = 655 + 9.6 * waga + 1.85 * wzrost - 4.7 * wiek
	}

	wynikB = wynikA * +selectedValue
	wynikC = wynikB - (wynikB * 0.15)
	
	
	
	wynikC = Math.round(wynikC);
	
	document.getElementById('wynik').value = wynikC;
	
}
function getSelectValue() {
	selectedValue = document.getElementById("tryb").value
}

window.onscroll = () => {myFunction()};

var navbar = document.getElementById("stickbar");

var sticky = navbar.offsetTop;

function myFunction() {
	if(window.scrollY >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}

}

var total=0;
function UpdateCost(elem) {
 
    if (elem.checked == true) { 
		total += Number(elem.value); 
	}else{
		total -=Number(elem.value);
	}
 
	document.getElementById('total').value = total.toFixed(0);
}
    
function poka1(){
document.getElementById("rozwijka1").style.display = "block";}
function ukryj1(){
document.getElementById("rozwijka1").style.display = "none";}
function poka2(){
document.getElementById("rozwijka2").style.display = "block";}
function ukryj2(){
document.getElementById("rozwijka2").style.display = "none";}
function poka3(){
document.getElementById("rozwijka3").style.display = "block";}
function ukryj3(){
document.getElementById("rozwijka3").style.display = "none";}
function poka4(){
document.getElementById("rozwijka4").style.display = "block";}
function ukryj4(){
document.getElementById("rozwijka4").style.display = "none";}
function poka5(){
document.getElementById("rozwijka5").style.display = "block";}
function ukryj5(){
document.getElementById("rozwijka5").style.display = "none";}
function poka6(){
document.getElementById("rozwijka6").style.display = "block";}
function ukryj6(){
document.getElementById("rozwijka6").style.display = "none";}
function poka7(){
document.getElementById("rozwijka7").style.display = "block";}
function ukryj7(){
document.getElementById("rozwijka7").style.display = "none";}
function poka8(){
document.getElementById("rozwijka8").style.display = "block";}
function ukryj8(){
document.getElementById("rozwijka8").style.display = "none";}
function poka9(){
document.getElementById("rozwijka9").style.display = "block";}
function ukryj9(){
document.getElementById("rozwijka9").style.display = "none";}
function poka10(){
document.getElementById("rozwijka10").style.display = "block";}
function ukryj10(){
document.getElementById("rozwijka10").style.display = "none";}
function poka11(){
document.getElementById("rozwijka11").style.display = "block";}
function ukryj11(){
document.getElementById("rozwijka11").style.display = "none";}
function poka12(){
document.getElementById("rozwijka12").style.display = "block";}
function ukryj12(){
document.getElementById("rozwijka12").style.display = "none";}
function poka13(){
document.getElementById("rozwijka13").style.display = "block";}
function ukryj13(){
document.getElementById("rozwijka13").style.display = "none";}
function poka101(){
document.getElementById("rozwijka101").style.display = "block";}
function ukryj101(){
document.getElementById("rozwijka101").style.display = "none";}
function poka102(){
document.getElementById("rozwijka102").style.display = "block";}
function ukryj102(){
document.getElementById("rozwijka102").style.display = "none";}
function poka103(){
document.getElementById("rozwijka103").style.display = "block";}
function ukryj103(){
document.getElementById("rozwijka103").style.display = "none";}
function poka104(){
document.getElementById("rozwijka104").style.display = "block";}
function ukryj104(){
document.getElementById("rozwijka104").style.display = "none";}
function poka105(){
document.getElementById("rozwijka105").style.display = "block";}
function ukryj105(){
document.getElementById("rozwijka105").style.display = "none";}
function poka106(){
document.getElementById("rozwijka106").style.display = "block";}
function ukryj106(){
document.getElementById("rozwijka106").style.display = "none";}
function poka107(){
document.getElementById("rozwijka107").style.display = "block";}
function ukryj107(){
document.getElementById("rozwijka107").style.display = "none";}
function poka108(){
document.getElementById("rozwijka108").style.display = "block";}
function ukryj108(){
document.getElementById("rozwijka108").style.display = "none";}
function poka109(){
document.getElementById("rozwijka109").style.display = "block";}
function ukryj109(){
document.getElementById("rozwijka109").style.display = "none";}
function poka110(){
document.getElementById("rozwijka110").style.display = "block";}
function ukryj110(){
document.getElementById("rozwijka110").style.display = "none";}
function poka201(){
document.getElementById("rozwijka201").style.display = "block";}
function ukryj201(){
document.getElementById("rozwijka201").style.display = "none";}
function poka202(){
document.getElementById("rozwijka202").style.display = "block";}
function ukryj202(){
document.getElementById("rozwijka202").style.display = "none";}
function poka203(){
document.getElementById("rozwijka203").style.display = "block";}
function ukryj203(){
document.getElementById("rozwijka203").style.display = "none";}
function poka204(){
document.getElementById("rozwijka204").style.display = "block";}
function ukryj204(){
document.getElementById("rozwijka204").style.display = "none";}
function poka205(){
document.getElementById("rozwijka205").style.display = "block";}
function ukryj205(){
document.getElementById("rozwijka205").style.display = "none";}
function poka206(){
document.getElementById("rozwijka206").style.display = "block";}
function ukryj206(){
document.getElementById("rozwijka206").style.display = "none";}
function poka207(){
document.getElementById("rozwijka207").style.display = "block";}
function ukryj207(){
document.getElementById("rozwijka207").style.display = "none";}
function poka208(){
document.getElementById("rozwijka208").style.display = "block";}
function ukryj208(){
document.getElementById("rozwijka208").style.display = "none";}
function poka209(){
document.getElementById("rozwijka209").style.display = "block";}
function ukryj209(){
document.getElementById("rozwijka209").style.display = "none";}
function poka210(){
document.getElementById("rozwijka210").style.display = "block";}
function ukryj210(){
document.getElementById("rozwijka210").style.display = "none";}