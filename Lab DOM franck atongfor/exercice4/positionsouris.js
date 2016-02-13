var p1 = document.getElementById("X");
var p2 = document.getElementById("Y");

document.addEventListener('mousemove', function(e) { p1.innerHTML = 'Position de la souris en X:'+ e.clientX ;
p2.innerHTML='Position de la souris en Y:'+ e.clientY; }, false);