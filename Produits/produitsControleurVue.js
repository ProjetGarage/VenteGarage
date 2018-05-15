//vue voyages

function listerCategories(list){
	var taille;
	var rep;
	taille=list.length;
	
	for(var i=0; i<taille; i++){
		rep+="<option value=" + list[i].idCategorie + " " + list[i].nomCategorie + ">" + list[i].idCategorie + " " + list[i].nomCategorie + "</option>";
	}
	
	$('#categorie').html(rep);
}


function listerEvenements(list){
	var taille;
	var rep;
	taille=list.length;
	
	for(var i=0; i<taille; i++){
		rep+="<option value=" + list[i].idEvenement + " " + list[i].titreEvenement + ">" + list[i].idEvenement + " " + list[i].titreEvenement + "</option>";
	}
	
	$('#evenement').html(rep);
}

function afficher(list){
	var taille;
	var rep;
	taille=list.length;
	
	for(var i=0; i<taille; i++){
		rep+="<option value=" + list[i].idProduit + " " + list[i].nomProduit + ">" + list[i].idProduit + " " + list[i].nomProduit + "</option>";
	}
	$('#nomProduit3').html(rep);
	$('#nomProduit2').html(rep);
	$('#nomProduit').html(rep);
}

function afficherTous(fiches){
	var taille;
	var rep="";
	taille=fiches.length;
	
	rep+="<div class='table-users' style='overflow: scroll; height: 500px;'>";
	rep+="<div class='header'>Liste des produits<span style='float:right;padding-right:10px;cursor:pointer;' onClick=\"$('#contenu').hide();\">X</span></div>";
	rep+="<table cellspacing='0'>";
	rep+="<tr><th>PHOTO PRODUIT</th> <th>NOM PRODUIT</th><th>DESCRIPTION</th><th>QUANTITE</th><th>PRIX</th><th>STATUT</th><th>EVENEMENT</th></tr>";

	                               
	for(var i=0; i<taille; i++){
		rep+="</td><td><img src=\"images/"+fiches[i].photoProd+"\" width=80 height=80></td><td>" + fiches[i].nomProduit+"</td><td>"+fiches[i].description+"</td><td>"+fiches[i].quantite+"</td><td>"+fiches[i].prix+"</td><td>"+fiches[i].statut+ "</td><td>"+fiches[i].titreEvenement+"</td></tr>";			 
	}
	rep+="</table>";
	rep+="</div>";
	$('#contenu').html(rep);
}

function listerCat(list){
	var taille;
	var rep="<div class='table-users' style='overflow: scroll; height: 500px;'>";
	rep+="<div class='header'>Lister les produits par categorie <span style='float:right;padding-right:10px;cursor:pointer;' onClick=\"$('#contenu').hide();\">X</span></div>";
	rep+="<table cellspacing='0'>";
	rep+="<tr><th>CATEGORIE</th><th>NOM PRODUIT</th><th>DESCRIPTION</th><th>QUANTITE</th><th>STATUT</th></tr>";

	taille=list.length;
	for(var i=0; i<taille; i++){
		rep+="<tr><td>"+list[i].nomCategorie+"</td><td>"+list[i].nomProduit+"</td><td>"+list[i].description+"</td><td>"+list[i].quantite+"</td><td>"+list[i].statut+"</td></tr>";		 
	}
	rep+="</table>";
	rep+="</div>";
	$('#contenu').html(rep);
}


function listerProduits(list){
	var taille;
    console.log('list success!!');
	var rep="<div class='table-users' style='overflow: scroll; height: 500px;'>";
	rep+="<div class='header'>Lister les produits par vendeur <span style='float:right;padding-right:10px;cursor:pointer;' onClick=\"$('#contenu').hide();\">X</span></div>";
	rep+="<table cellspacing='0'>";
	rep+="<tr><th>NOM PRODUIT</th><th>DESCRIPTION</th><th>QUANTITE</th><th>STATUT</th></tr>";

	taille=list.length;
	for(var i=0; i<taille; i++){
		rep+="<tr><td>"+list[i].nomProduit+"</td><td>"+list[i].description+"</td><td>"+list[i].quantite+"</td><td>"+list[i].statut+"</td></tr>";		 
	}
	rep+="</table>";
	rep+="</div>";
	
	$('#contenu').html(rep);
}

function listerFicheTab(list){
	
	var taille;
	taille=list.length;
	
	var rep="<div class=\"w3-card-4\" style=\"width:21.34em;height:21.34em;float:left;margin-right:15px;margin-top:1000px\">\n"; 
	rep += "		  <div class=\"w3-container w3-left\">\n";
	rep += "			<i>Nom du produit : "+list[0].nomProduit+"</i><br>\n"; 
	rep += "			    <i>Description du produit :  "+list[0].description+"</i><br>\n"; 
	rep += "			    <i>Quantité :  "+list[0].quantite+"</i>\n"; 
	rep += "		  </div>\n"; 
	
		

	rep+="</div>\n";
	rep+="</div>\n";
	$('#contenu').html(rep);
	$('#contenu').show();
}

function afficherFiche(rep){
 
  var taille, rep;
  var uneFiche, str;
 
  if(rep.OK){
	uneFiche=rep.fiche;
	
    $('#nomProduit4').val(uneFiche.nomProduit);
	$('#categorie4').val(uneFiche.nomCategorie);
    $('#prix4').val(uneFiche.prix);
	$('#evenement4').val(uneFiche.titreEvenement);
  	$('#courriel4').val(uneFiche.courriel);
	$('#quantite4').val(uneFiche.quantite);
	$('#description4').val(uneFiche.description);
	
	
	$('#divFormFiche').show();

}

} 
    var produitsVue=function(reponse){
	var action=reponse.action;
 //   console.log(action);   
	switch(action){
		case "enregistrer" :
		case "enlever" :
		case "modifier":
		     alert(reponse.msg);   
		break;
		
		case "listeCat" :
			listerCat(reponse.listePC);
		break;
				
		case "listeP" :
			afficherTous(reponse.listeProd);
		break;
		
		case "listeC" :
			listerCategories(reponse.listeCat);
		break;
		
		case "afficherP" :
			afficher(reponse.listePt);
		break;
		
		case "listeProduits":
		     listerProduits(reponse.listePr);
		break;
		
		case "listeE":
		     listerEvenements(reponse.listeEve);
		break;
		
		case "obtenirFiche" :
			afficherFiche(reponse);
			//listerFicheTab(reponse.fiche);
		break;
		
	}
}

