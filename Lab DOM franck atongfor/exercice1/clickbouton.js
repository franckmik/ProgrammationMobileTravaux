var p = document.getElementById("message");
var Cmpt=0;
document.getElementById("boutton").addEventListener("click", function() {
	  
	Cmpt++;
	  p.innerHTML ="Vous avez cliqué "+Cmpt+" fois";
	});