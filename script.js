function print(message) {
	document.write(message);
}

let myNavBox = document.getElementById("navBox");
let myNavLinks = document.getElementById("navLinks");

myNavBox.onclick = function() {
	
	if (myNavLinks.style.display == "block") {
		myNavLinks.style.display = "none";
	} else {
		myNavLinks.style.display = "block";
	}
}

