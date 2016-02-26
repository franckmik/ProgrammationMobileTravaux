var produit={
	samsung5:'5000',
	samsung6:'100'
};

var Informations={
	quantite:'',
	produit:'',
	nomclient:'',
	adresse:''
};



var input=document.getElementsByTagName('input');

var SousTotal=0;
var Taxe=0;
var Total=0;
var nomproduit='samsung5';

	

function verifNomClient(champ)
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





function verifMail(champ) 
{
	
		var regexmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/; 

		if(!regexmail.test(champ.value)) 
		{ 
		surligne(champ, true); return false; 
		}
		 else 
		 {
			surligne(champ, false); return true;
		
		}
	
}

function verifAdresse(champ)
{
	var regexadresse = /^[0-9]{1,4}(([,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç']+)*/; 

		if(!regexadresse.test(champ.value)) 
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
		{
			champ.style.backgroundColor = "#fba";
		}
		else 
		{
			champ.style.backgroundColor = "";			
		}
		
	CalculMontant();
}


function verifQuantite(champ)
{
	if((parseFloat(champ.value) == parseInt(champ.value)) && (!isNaN(champ.value))&&(parseInt(champ.value)>=1)&&(champ.value!=''))
	{ 
      
	  surligne(champ, false); 
			return true;  
	}
	else 
	{
      surligne(champ, true); 
			return false; 
	}
	
}		

function verifier(f) 
{ 
	
	var nomclient = verifNomClient(f.nomclient);
	var adressemail = verifMail(f.adressemail);
	var adresselivraison = verifAdresse(f.adresselivraison);
	
	var quantite = verifQuantite(f.quantitecommande);
	
	if(quantite&&nomclient&&adressemail&&adresselivraison)
	{
		alert("bien saisi");
		
		Informations['quantite']=input[0].value;
		Informations['adresse']=input[3].value;
		Informations['nomclient']=input[1].value;
		Informations['produit']=nomproduit;
		
		
		alert('Commande passee pour '+Informations['quantite']+' '+Informations['produit']+',au prix de '+Total.toString()+' $.La livraison se fera au '+Informations['adresse']+' d\'ici quelques jours.Merci beaucoup, '+Informations['nomclient']);
		
		return true;
	}
	 else 
	 { 
	alert("Le formulaire est peut etre mal rempli.Remplissez suivant le bon format.");
	
	return false; 
	}
}

function CalculMontant()
{   

		

		if(((parseFloat(quantitecommande.value) == parseInt(quantitecommande.value)) && (!isNaN(quantitecommande.value))&&(parseInt(quantitecommande.value)>=1)&&(quantitecommande.value!='')))
		{
			switch(nomproduit)
			{
		
			case 'samsung5':
			
			SousTotal=parseInt(produit.samsung5)*parseInt(quantitecommande.value);
			Taxe=SousTotal*0.15;
			
			break;
			
			case 'samsung6':
			SousTotal=parseInt(produit.samsung6)*parseInt(quantitecommande.value);
			Taxe=SousTotal*0.15;
			
			break;
		
			}
		}
		else
		{
			SousTotal=0;	
			Taxe=0;
		}
		
		taxes.value=Taxe.toString();
	
		soustotal.value=SousTotal.toString();
				
		Total=SousTotal+Taxe;
			
		total.value=Total.toString();
		
}

function nomProduit(liste) 
{ 
	var numero = liste.selectedIndex;
	nomproduit = liste.options[numero].value;
	CalculMontant();
}