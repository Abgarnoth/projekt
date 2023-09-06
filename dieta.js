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
	
	
	/*document.getElementById("1").textContent = Math.round(tluszcz)
	document.getElementById("2").textContent = Math.round(bialko)
	document.getElementById("3").textContent = Math.round(wegle)
	tluszcz = (wynikB * 0.3) / 9
	bialko = (wynikB * 0.15) / 4
	wegle = (wynikB * 0.55) / 4*/
	wynikC = Math.round(wynikC);
	/*document.getElementById("wynik").innerHTML =  wynikC;*/
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
	document.getElementById("rozwijka1").style.display = "block";
}

function ukryj1(){
	document.getElementById("rozwijka1").style.display = "none";
}
function poka2(){
	document.getElementById("rozwijka2").style.display = "block";
}

function ukryj2(){
	document.getElementById("rozwijka2").style.display = "none";
}

