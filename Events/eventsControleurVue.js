

    function printtableheaderE()
    {
     var rep="<div><button type='button' class='btn btn-theme' data-toggle='modal' data-target='#newModalEv'>Ajouter</button>";
     rep+="&nbsp;<button type='button' class='btn btn-theme' onclick='listerEventsVendeur();'>Rafraîchir</button></div>";
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
    rep+="        <h3 class='modal-title'>Information de Evenements</h3> ";
    rep+="      </div> ";
    rep+="      <div class='modal-body'> ";
    rep+="           <div class='col-md-12 single-right-grid-right'> ";
    rep+="        <form class='form-horizontal' id='formEnregPr' enctype='multipart/form-data' action='' method='POST' onSubmit='return valider();'>  ";
    rep+="              <input placeholder='Nom Evenement' class='form-control' type='text' id='nomEvenement' name='nomEvenement' required> ";
    rep+="              <input class='form-control' type='number' step='0.01' id='quantiteEv' name='quantiteEv' placeholder='Quantite de Evenement' required>";
    rep+="              <input placeholder='Prix de Evenement' class='form-control' type='number' step='0.01' id='prixEv' name='prixEv' required> ";
    rep+="";
    rep+="                    <br>Categorie:&nbsp;&nbsp; <select placeholder='<br>Categorie Evenement' class='form-control col-sd-3' id='categorieEv' name='categorieEv'> ";
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
    rep+="                    <br>Statut:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select placeholder='Statut' class='form-control col-sd-10' id='statutEv' name='statutEv'> ";
    rep+="                            <option value='1'>Activée</option> ";
    rep+="                            <option value='0'>Désactivée</option> ";
    rep+="                          </select> ";
    rep+="              <input type='file' id='photoEv' name='photoEv' placeholder='Photo'> ";
    rep+="              <input type='text' placeholder='Description du Evenement' class='form-control' id='descriptionEv'  name='descriptionEv'>"; 
    rep+="                  <div class='modal-footer'> ";
    rep+="                      <input type='button' class='btn btn-theme' value='Envoyer' onclick='enregistrerEv();'> ";
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
    rep+="                <h4 class='modal-title'>Information de Evenements</h4> ";
    rep+="              </div> ";
    rep+="              <div class='modal-body'> ";
    rep+="                <div class='col-md-12 single-right-grid-right'> ";
    rep+="                <form class='form-horizontal' id='formModifyPr' enctype='multipart/form-data' action='' method='POST'>  ";
    rep+="                      <input class='form-control' type='text' id='id_Ev_mod' name='id_Ev_mod' style='visibility:hidden' placeholder='Id Evenement'  required> ";
    rep+="<input class='form-control' type='text' id='idMembre_mod' name='idMembre_mod' style='visibility:hidden'  required> ";
    rep+="                      <br>Nom Evenement: <input placeholder='Nom Evenement' class='form-control' type='text' id='nomEvenement_mod' name='nomEvenement_mod' required> ";
    rep+="                     <br>Quantite:&nbsp;&nbsp;&nbsp;&nbsp; <input class='form-control' type='number' step='0.01' id='quantiteEv_mod' name='quantiteEv_mod' placeholder='Quantite' required>";
    rep+="                      <br>Prix:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input placeholder='Prix' class='form-control' type='number' step='0.01' id='prixEv_mod' name='prixEv_mod' required> ";
    rep+="                    <br>Categorie:&nbsp;&nbsp; <select placeholder='<br>Categorie Evenement' class='form-control col-sd-3' id='categorieEv_mod' name='categorieEv_mod'> ";
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
    rep+="                    <br>Statut:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select placeholder='Statut' class='form-control col-sd-10' id='statutEv_mod' name='statutEv_mod'> ";
    rep+="                            <option value='1'>Activée</option> ";
    rep+="                            <option value='0'>Désactivée</option> ";
    rep+="                          </select> ";
    rep+="                        <p id='srctxt' name='srctxt'>Photo: </p><input class='form-control' type='file' id='photoEv_mod' name='photoEv_mod' placeholder='Photo'> ";
    rep+="                        <br>Description: <input size='255' maxlength='255' type='textarea' class='form-control' placeholder='Description de Evenement' rows='4' cols='50' id='descriptionEv_mod'  name='descriptionEv_mod'> ";
    rep+="                            <div class='modal-footer'> ";
    rep+="                                <input type='button' class='btn btn-theme' value='Modifier' onclick='modifierEv();'> ";
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
      rep+="  <p class='modal-text'>Ev No:&nbsp;<input type='text' id='idEvE' name='idEvE'  style='border: none;background-color:white;' readonly></p> ";
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
      rep+="  <th>Nom Evenement</th>"; 
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
    function printtablefooterE()
    {
      var rep="    </div>";
      rep+="    </tbody>"; 
      rep+="</table> ";
      rep+=" </div>		"; 
      rep+=" </div>";
        return rep;
    }

//modified list of Evucts
function listerEvents(list){
	var taille;
    var rep;
    rep=printtableheaderE();
	taille=list.length;
	for(var i=0; i<taille; i++){
        rep+="<tr class='rem1'>";
		rep+="<td id='idEv' class='invert'>"+list[i].idEvenement;
        rep+="<td id='idMembre' class='invert'>"+list[i].idMembre;
        rep+="</td><td id='photoEv' lass='invert'><img src='pochette/"+list[i].pochette+"' width='80'";
        rep+="</td><td id='nomEv' class='invert'>"+list[i].nomEvenement;
        rep+="</td><td class='invert'>"+list[i].description;	 
        rep+="</td><td class='invert'>"+list[i].idCategorie;		 
        rep+="</td><td class='invert'>"+list[i].quantite;
        rep+="</td><td class='invert'>"+list[i].prix;
        rep+="</td><td class='invert'>"+list[i].statut+"</td>";
        rep+="<td class='invert'>"; 
        rep+="<button type='button' class='btn btn-theme' data-toggle='modal' data-target='#modifyModalPr' onclick=\"document.getElementById('id_Ev_mod').value="+list[i].idEvenement+";document.getElementById('nomEvenement_mod').value='"+list[i].nomEvenement+"';document.getElementById('quantiteEv_mod').value="+list[i].quantite+";document.getElementById('prixEv_mod').value="+list[i].prix+";document.getElementById('categorieEv_mod').value="+list[i].idCategorie+";document.getElementById('idMembre_mod').value="+list[i].idMembre+";document.getElementById('statutEv_mod').value="+list[i].statut+";document.getElementById('descriptionEv_mod').value='"+list[i].description+"';document.getElementById('srctxt').innerHTML='Photo: "+list[i].pochette+"';\">&nbsp;&nbsp;Modifier&nbsp;&nbsp;</button>";
        rep+="<br><br><button type='button' class='btn btn-theme' data-toggle='modal' data-target='#delModalPr' onclick=\"document.getElementById('idEvE').value="+list[i].idEvenement+";\">Supprimer</button></td></tr>";
	}
    rep+=printtablefooterE();
	$('#contenu').html(rep);
}

} 
    var eventsVue=function(reponse){
	var action=reponse.action;
 //   console.log(action);   
	switch(action){
		case "enregistrerEvent" :
		case "enleverEvent" :
		case "modifierEvent":
		     alert(reponse.msg);   
		break;
		case "afficherEv" :
			afficher(reponse.listePt);
		break;
		
		case "listeEvents":
		     listerEvents(reponse.listePr);
		break;
		
		case "listeE":
		     listerEvenements(reponse.listeEve);
		break;
		
		
	}
}

