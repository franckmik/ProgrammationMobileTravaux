
var utilisateurs={}
		
var input=document.getElementsByTagName('input');


function verifPseudo(champ) 
{ 
	if(champ.value.length < 2 || champ.value.length > 25)
	{ surligne(champ, true); return false; }
	else { surligne(champ, false); return true; }
 }
 
 
 function verifMotPasse(champ)
 {
	
	 var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"); 
	

	if(!regex.test(champ.value)) 
	{ 
		surligne(champ, true);
		return false;
	
	}
	else 
	{ 
	surligne(champ, false); 
	return true; 
	}

}

function verifNomPrenom(champ)
{
	
	if(champ.value=="")
	{
		surligne(champ, true);
		return false;
	}
	else
	{
		surligne(champ, false);
		return true;
	}
	
	
}

 function surligne(champ, erreur) 
 { 
		if(erreur) 
			champ.style.backgroundColor = "#fba";
		else champ.style.backgroundColor = ""; 
}


function verifMail(champ) 
{
	
		var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/; 

		if(!regex.test(champ.value)) 
		{ surligne(champ, true); return false; }
		 else 
		 { surligne(champ, false); return true; }
 
}

function verifier(f) 
{ 
	var nomutilisateur = verifPseudo(f.nomutilisateur);
	var motpasse = verifMotPasse(f.motdepasse);
	var nom = verifNomPrenom(f.nom);
	var prenom = verifNomPrenom(f.prenom);
	var adressemail = verifMail(f.adressemail);
	
	if(nomutilisateur&&motpasse&&nom&&prenom&&adressemail)
	{
		alert("Bien saisi.Vous possedez desormais un compte.");
		utilisateurs[input[0].value]=input[1].value;
	}
	 else 
	 { 
	
	
	alert("Le formulaire est mal rempli.Reesayez.");
	
	
	}
	
	 return false; 
}
function verifier2(f) 
{ 
	var nomutilisateur2 = verifPseudo(f.nomutilisateur2);
	var motpasse2 = verifMotPasse(f.motdepasse2);
	
	
	if(nomutilisateur2&&motpasse2)
	{
		
		
		if(input[7].value==utilisateurs[input[0].value])
		{
			
			alert('login............');
		}
		else
		{
			alert('Vous n\'etes pas encore inscrits.Vous devez vous creer un compte au prealable avant de vous loger.');
			
		}
		return true;
	}
	 else 
	 { 
		
		alert("Le formulaire est mal rempli");
	
	
	 return false; 
	}
}
