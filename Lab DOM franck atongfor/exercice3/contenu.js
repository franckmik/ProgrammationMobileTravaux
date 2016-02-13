

var ps = document.querySelectorAll('p');
for(var i in ps) 
{
	ps[i].onclick = function() 
	{ this.parentNode.removeChild(this); } 
}