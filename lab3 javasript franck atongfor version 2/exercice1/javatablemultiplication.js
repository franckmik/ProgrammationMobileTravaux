var nombre = parseInt(prompt('entrez une valeur'));
function tablemultiplication(Nombre)
{
	
	for(var i=1;i<=10;i++)
	{
		var c=0;
		c=Nombre*i;
		console.log(Nombre+'x'+i+'='+c);
	}
	
};
tablemultiplication(nombre);