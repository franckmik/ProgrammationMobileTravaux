var nombrealeatoire = Math.floor(Math.random()*20);
var trouve=false;

alert(nombrealeatoire);
var nombre = parseInt(prompt('entrez un nombre'));




while(trouve===false)
{
	if(nombre==nombrealeatoire)
	{
		trouve=true;
		alert('vous avez trouvé le nombre');
		
	}
	else
	{
		if(nombre<nombrealeatoire)
		{
			alert('le nombre est trop petit: reessayez');
			
		}
		else
		{
			alert('le nombre est trop grand: reessayez');
			
		}
		
		var nombre = parseInt(prompt('entrez un nombre'));
	}
	
}