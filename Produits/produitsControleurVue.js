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
    if (fiches)
    {
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
    function printtableheader()
    {
     var rep="<div><button type='button' class='btn btn-theme' data-toggle='modal' data-target='#newModalPr'>Ajouter</button>";
     rep+="&nbsp;<button type='button' class='btn btn-theme' onclick='listerProduitsVendeur();'>Rafraîchir</button></div>";
    rep+="<div class='privacy about'>";
    rep+="<div class='col-md-8 address_form'>";
    rep+="<!-- Modal -->";
    rep+="<div class='modal fade' id='newModalPr' role='dialog'> ";
    rep+="  <div class='modal-dialog'> ";
    rep+="";
    rep+="    <!-- Modal content--> ";
    rep+="    <div class='modal-content'>"; 
    rep+="      <div class='modal-header'> ";
    rep+="        <button type='button' class='close' data-dismiss='modal'>&times;</button> ";
    rep+="        <h3 class='modal-title'>Information de Produits</h3> ";
    rep+="      </div> ";
    rep+="      <div class='modal-body'> ";
    rep+="           <div class='col-md-12 single-right-grid-right'> ";
    rep+="        <form class='form-horizontal' id='formEnregPr' enctype='multipart/form-data' action='' method='POST' onSubmit='return valider();'>  ";
    rep+="              <input placeholder='Nom Produit' class='form-control' type='text' id='nomProduit' name='nomProduit' required> ";
    rep+="              <input class='form-control' type='number' step='0.01' id='quantiteProd' name='quantiteProd' placeholder='Quantite de produit' required>";
    rep+="              <input placeholder='Prix de produit' class='form-control' type='number' step='0.01' id='prixProd' name='prixProd' required> ";
    rep+="";
    rep+="                    <br>Categorie:&nbsp;&nbsp; <select placeholder='<br>Categorie Produit' class='form-control col-sd-3' id='categorieProd' name='categorieProd'> ";
    rep+="                            <option value='1'>Accessoires Informatiques</option> ";
    rep+="                            <option value='2'>Appareils electromenagers</option> ";
    rep+="                            <option value='3'>Appareils photo et cameras</option> ";
    rep+="                            <option value='4'>Art et objet de collection</option> ";
    rep+="                            <option value='5'>Articles pour bebes</option> ";
    rep+="                            <option value='6'>Articles de sport et exercice</option> ";
    rep+="                            <option value='7'>Autre</option> ";
    rep+="                            <option value='8'>Bijoux et montres</option> ";
    rep+="                            <option value='9'>Equipements electroniques</option> ";
    rep+="                            <option value='10'>Instruments de musique</option> ";
    rep+="                            <option value='11'>Objets gratuits</option> ";
    rep+="                            <option value='12'>Sante et besoins speciaux</option> ";
    rep+="                            <option value='13'>Souliers</option> ";
    rep+="                            <option value='14'>velos</option> ";
    rep+="                            <option value='15'>vetements</option> ";
    rep+="                          </select> ";
    rep+="                    <br>Statut:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select placeholder='Statut' class='form-control col-sd-10' id='statutProd' name='statutProd'> ";
    rep+="                            <option value='1'>Activée</option> ";
    rep+="                            <option value='0'>Désactivée</option> ";
    rep+="                          </select> ";
    rep+="              <input type='file' id='photoProd' name='photoProd' placeholder='Photo'> ";
    rep+="              <input type='text' placeholder='Description du produit' class='form-control' id='descriptionProd'  name='descriptionProd'>"; 
    rep+="                  <div class='modal-footer'> ";
    rep+="                      <input type='button' class='btn btn-theme' value='Envoyer' onclick='enregistrerProd();'> ";
    rep+="                      <button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button> ";
    rep+="                  </div> ";
    rep+="";
    rep+="          </form> ";
    rep+="          </div> ";
    rep+="      </div> ";
    rep+="    </div> ";
    rep+="";
    rep+="  </div> ";
    rep+="</div> ";
    rep+="";
    rep+="    <div class='modal fade' id='modifyModalPr' role='dialog'> ";
    rep+="          <div class='modal-dialog'> ";
    rep+="            <!-- Modal content--> ";
    rep+="            <div class='modal-content'>"; 
    rep+="              <div class='modal-header'> ";
    rep+="                <button type='button' class='close' data-dismiss='modal'>&times;</button> ";
    rep+="                <h4 class='modal-title'>Information de Produits</h4> ";
    rep+="              </div> ";
    rep+="              <div class='modal-body'> ";
    rep+="                <div class='col-md-12 single-right-grid-right'> ";
    rep+="                <form class='form-horizontal' id='formModifyPr' enctype='multipart/form-data' action='' method='POST'>  ";
    rep+="                      <input class='form-control' type='text' id='id_prod_mod' name='id_prod_mod' style='visibility:hidden' placeholder='Id Produit'  required> ";
    rep+="<input class='form-control' type='text' id='idMembre_mod' name='idMembre_mod' style='visibility:hidden'  required> ";
    rep+="                      <br>Nom Produit: <input placeholder='Nom Produit' class='form-control' type='text' id='nomProduit_mod' name='nomProduit_mod' required> ";
    rep+="                     <br>Quantite:&nbsp;&nbsp;&nbsp;&nbsp; <input class='form-control' type='number' step='0.01' id='quantiteProd_mod' name='quantiteProd_mod' placeholder='Quantite' required>";
    rep+="                      <br>Prix:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input placeholder='Prix' class='form-control' type='number' step='0.01' id='prixProd_mod' name='prixProd_mod' required> ";
    rep+="                    <br>Categorie:&nbsp;&nbsp; <select placeholder='<br>Categorie Produit' class='form-control col-sd-3' id='categorieProd_mod' name='categorieProd_mod'> ";
    rep+="                            <option value='1'>Accessoires Informatiques</option> ";
    rep+="                            <option value='2'>Appareils electromenagers</option> ";
    rep+="                            <option value='3'>Appareils photo et cameras</option> ";
    rep+="                            <option value='4'>Art et objet de collection</option> ";
    rep+="                            <option value='5'>Articles pour bebes</option> ";
    rep+="                            <option value='6'>Articles de sport et exercice</option> ";
    rep+="                            <option value='7'>Autre</option> ";
    rep+="                            <option value='8'>Bijoux et montres</option> ";
    rep+="                            <option value='9'>Equipements electroniques</option> ";
    rep+="                            <option value='10'>Instruments de musique</option> ";
    rep+="                            <option value='11'>Objets gratuits</option> ";
    rep+="                            <option value='12'>Sante et besoins speciaux</option> ";
    rep+="                            <option value='13'>Souliers</option> ";
    rep+="                            <option value='14'>velos</option> ";
    rep+="                            <option value='15'>vetements</option> ";
    rep+="                          </select> ";
    rep+="                    <br>Statut:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select placeholder='Statut' class='form-control col-sd-10' id='statutProd_mod' name='statutProd_mod'> ";
    rep+="                            <option value='1'>Activée</option> ";
    rep+="                            <option value='0'>Désactivée</option> ";
    rep+="                          </select> ";
    rep+="                        <p id='srctxt' name='srctxt'>Photo: </p><input class='form-control' type='file' id='photoProd_mod' name='photoProd_mod' placeholder='Photo'> ";
    rep+="                        <br>Description: <input size='255' maxlength='255' type='textarea' class='form-control' placeholder='Description de produit' rows='4' cols='50' id='descriptionProd_mod'  name='descriptionProd_mod'> ";
    rep+="                            <div class='modal-footer'> ";
    rep+="                                <input type='button' class='btn btn-theme' value='Modifier' onclick='modifierProd();'> ";
    rep+="                                <button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button> ";
    rep+="                            </div> ";
    rep+="                    </form> ";
    rep+="                    </div> ";
    rep+="                </div> ";
    rep+="              </div> ";
    rep+="            </div> ";
    rep+="          </div>";
      rep+="  <div class='modal fade' id='delModalPr' role='dialog'> ";
      rep+="    <div class='modal-dialog'> ";
     rep+="   <BR><BR><BR><BR><BR><BR> ";
      rep+=" <!-- Modal content--> ";
      rep+=" <div class='modal-content'>"; 
      rep+="   <div class='modal-header'> ";
      rep+="<button type='button' class='close' data-dismiss='modal'>&times;</button> ";
      rep+="<form id='formEnleverPr' method='POST'> ";
      rep+="<p class='modal-text'>Êtes-vous sûr de vouloir supprimer l'enregistrement?</p> ";
      rep+="  <p class='modal-text'>Prod No:&nbsp;<input type='text' id='idProdE' name='idProdE'  style='border: none;background-color:white;' readonly></p> ";
      rep+="  <div class='modal-footer'> ";
      rep+=" <input type='submit' class='btn btn-theme' value='OK' onclick='enleverPr()'> ";
      rep+=" <button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button> ";
      rep+="  </div> ";
      rep+="</form> ";
      rep+="   </div> ";
      rep+=" </div> ";

      rep+="    </div>"; 
      rep+="  </div> ";
      rep+=" </div> ";
      rep+=" <div class='checkout-right'> ";
      rep+="   <BR><BR><BR><BR><BR><BR> ";
      rep+="<table class='timetable_sub'> ";
      rep+="    <thead> ";
      rep+="   <tr> ";
      rep+="  <th>No.</th> ";
      rep+="  <th>No.Membre</th> ";
      rep+="  <th>Photo</th> ";
      rep+="  <th>Nom Produit</th>"; 
      rep+="  <th>Description</th> ";
      rep+="  <th>Catégorie</th> ";
      rep+="  <th>Quantite</th> ";
      rep+="  <th>Prix</th>";
      rep+="  <th>Statut</th>";
      rep+="  <th>Gestion</th> ";
      rep+="   </tr> ";
      rep+="    </thead>"; 
      rep+="    <tbody>";
        return rep;
    }
    function printtablefooter()
    {
      var rep="    </div>";
      rep+="    </tbody>"; 
      rep+="</table> ";
      rep+=" </div>		"; 
      rep+=" </div>";
        return rep;
    }

//modified list of products
function listerProduits(list){
	var taille;
    var rep;
    rep=printtableheader();
	taille=list.length;
	for(var i=0; i<taille; i++){
        rep+="<tr class='rem1'>";
		rep+="<td id='idProd' class='invert'>"+list[i].idProduit;
        rep+="<td id='idMembre' class='invert'>"+list[i].idMembre;
        rep+="</td><td id='photoProd' lass='invert'><img src='pochette/"+list[i].pochette+"' width='80'/>";
        rep+="</td><td id='nomProd' class='invert'>"+list[i].nomProduit;
        rep+="</td><td class='invert'>"+list[i].description;	 
        rep+="</td><td class='invert'>"+list[i].idCategorie;		 
        rep+="</td><td class='invert'>"+list[i].quantite;
        rep+="</td><td class='invert'>"+list[i].prix;
        rep+="</td><td class='invert'>"+list[i].statut+"</td>";
        rep+="<td class='invert'>"; 
        rep+="<button type='button' class='btn btn-theme' data-toggle='modal' data-target='#modifyModalPr' onclick=\"document.getElementById('id_prod_mod').value="+list[i].idProduit+";document.getElementById('nomProduit_mod').value='"+list[i].nomProduit+"';document.getElementById('quantiteProd_mod').value="+list[i].quantite+";document.getElementById('prixProd_mod').value="+list[i].prix+";document.getElementById('categorieProd_mod').value="+list[i].idCategorie+";document.getElementById('idMembre_mod').value="+list[i].idMembre+";document.getElementById('statutProd_mod').value="+list[i].statut+";document.getElementById('descriptionProd_mod').value='"+list[i].description+"';document.getElementById('srctxt').innerHTML='Photo: "+list[i].pochette+"';\">&nbsp;&nbsp;Modifier&nbsp;&nbsp;</button>";
        rep+="<br><br><button type='button' class='btn btn-theme' data-toggle='modal' data-target='#delModalPr' onclick=\"document.getElementById('idProdE').value="+list[i].idProduit+";\">Supprimer</button></td></tr>";
	}
    rep+=printtablefooter();
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
		case "enregistrerProduit" :
		case "enleverProduit" :
		case "modifierProduit":
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

