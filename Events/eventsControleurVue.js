    function printtableheaderE()
    {
     var rep="<div><button type='button' class='btn btn-theme' data-toggle='modal' data-target='#newModalEv'>Ajouter</button>";
     rep+="&nbsp;<button type='button' class='btn btn-theme' onclick='listerEventsVendeur();'>Rafraîchir</button></div>";
    rep+="<div class='privacy about'>";
    rep+="<div class='col-md-8 address_form'>";
    rep+="<!-- Modal -->";
    rep+="<div class='modal fade' id='newModalEv' role='dialog'> ";
    rep+="  <div class='modal-dialog'> ";
    rep+="";
    rep+="    <!-- Modal content--> ";
    rep+="    <div class='modal-content'>"; 
    rep+="      <div class='modal-header'> ";
    rep+="        <button type='button' class='close' data-dismiss='modal'>&times;</button> ";
    rep+="        <h3 class='modal-title'>Information de Ventes de Garage</h3> ";
    rep+="      </div> ";
    rep+="      <div class='modal-body'> ";
    rep+="           <div class='col-md-12 single-right-grid-right'> ";
    rep+="        <form class='form-horizontal' id='formEnregEv' enctype='multipart/form-data' action='' method='POST' onSubmit='return valider();'>  ";
    rep+="              <input placeholder='Nom Evenement' class='form-control' type='text' id='titreEvenement' name='titreEvenement' required> ";
    rep+="              <br>Date de Debut: <input class='form-control' type='date' id='dateDebut' name='dateDebut' placeholder='Date de Debut' required>";
    rep+="              <br>Date de Fin:&nbsp;&nbsp;&nbsp; <input placeholder='Date de Fin' class='form-control' type='date' id='dateFin' name='dateFin' required> ";
    rep+="";
    
    rep+="              <br>Photo: <input type='file' id='photoEv' name='photoEv' placeholder='Photo'> ";
    rep+="              <br><input type='text' placeholder='Description du Evenement' class='form-control' id='descriptionEv'  name='descriptionEv'>"; 
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
    rep+="    <div class='modal fade' id='modifyModalEv' role='dialog'> ";
    rep+="          <div class='modal-dialog'> ";
    rep+="            <!-- Modal content--> ";
    rep+="            <div class='modal-content'>"; 
    rep+="              <div class='modal-header'> ";
    rep+="                <button type='button' class='close' data-dismiss='modal'>&times;</button> ";
    rep+="                <h4 class='modal-title'>Information de Vente de Garage</h4> ";
    rep+="              </div> ";
    rep+="              <div class='modal-body'> ";
    rep+="                <div class='col-md-12 single-right-grid-right'> ";
    rep+="                <form class='form-horizontal' id='formModifyEv' enctype='multipart/form-data' action='' method='POST'>  ";
    rep+="                      <input class='form-control' type='text' id='idEvenement_mod' name='idEvenement_mod' style='visibility:hidden' placeholder='Id Evenement'  required> ";
    rep+="                      <br>Evenement: <input placeholder='Nom Evenement' class='form-control' type='text' id='titreEvenement_mod' name='titreEvenement_mod' required> ";
    rep+="                      <br>Date de Debut: <input placeholder='Date de Debut' class='form-control' type='date' id='dateDebut_mod' name='dateDebut_mod' dateformat='YYYY-MM-dd' required> ";
    rep+="                      <br>Date de Fin: &nbsp;&nbsp;&nbsp;<input placeholder='Date de Fin date-format='YYYY-MM-dd' class='form-control' type='date' id='dateFin_mod' name='dateFin_mod' required> ";
    rep+="                        <p id='srctxt' name='srctxt'>Photo: </p><input class='form-control' type='file' id='photoEv_mod' name='photoEv_mod' placeholder='Photo'> ";
    rep+="                        <br>Description: <input size='255' maxlength='255' type='textarea' class='form-control' placeholder='Description de Evenement' rows='4' cols='50' id='descriptionEv_mod'  name='descriptionEv_mod'> ";
     rep+="<input class='form-control' type='text' id='idMembre_mod' name='idMembre_mod' style='visibility:hidden'  required> ";
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
      rep+="  <div class='modal fade' id='delModalEv' role='dialog'> ";
      rep+="    <div class='modal-dialog'> ";
     rep+="   <BR><BR><BR><BR><BR><BR> ";
      rep+=" <!-- Modal content--> ";
      rep+=" <div class='modal-content'>"; 
      rep+="   <div class='modal-header'> ";
      rep+="<button type='button' class='close' data-dismiss='modal'>&times;</button> ";
      rep+="<form id='formEnleverEv' method='POST'> ";
      rep+="<p class='modal-text'>Êtes-vous sûr de vouloir supprimer l'enregistrement?</p> ";
      rep+="  <p class='modal-text'>Ev No:&nbsp;<input type='text' id='idEvE' name='idEvE'  style='border: none;background-color:white;' readonly></p> ";
      rep+="  <div class='modal-footer'> ";
      rep+=" <input type='submit' class='btn btn-theme' value='OK' onclick='enleverEv()'> ";
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
      rep+="  <th>Vente de Garage</th>"; 
      rep+="  <th>Address</th>"; 
      rep+="  <th>Description</th> ";
      rep+="  <th>Date de Debut</th> ";
      rep+="  <th>Date de Fin</th> ";
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
		rep+="<td class='invert'>"+list[i].idEvenement;
        rep+="<td class='invert'>"+list[i].idMembre;
        rep+="</td><td class='invert'><img src='pochette/"+list[i].pochette+"' width='80'/>";
        rep+="</td><td class='invert'>"+list[i].titreEvenement;
        rep+="</td><td class='invert'>"+list[i].idAddress;
        rep+="</td><td class='invert'>"+list[i].description;
        //date = new Date(list[i].dateDebut);
        rep+="</td><td class='invert'>"+list[i].dateDebut;	
        rep+="</td><td class='invert'>"+list[i].dateFin+"</td>";
        rep+="<td class='invert'>"; 
        rep+="<button type='button' class='btn btn-theme' data-toggle='modal' data-target='#modifyModalEv' onclick=\"document.getElementById('idEvenement_mod').value='"+list[i].idEvenement+"';document.getElementById('titreEvenement_mod').value='"+list[i].titreEvenement+"';document.getElementById('descriptionEv_mod').value='"+list[i].description+"';document.getElementById('dateDebut_mod').value='"+list[i].dateDebut+"';document.getElementById('dateFin_mod').value='"+list[i].dateFin+"';document.getElementById('srctxt').innerHTML='Photo: "+list[i].pochette+"';\">&nbsp;&nbsp;Modifier&nbsp;&nbsp;</button>";
        rep+="<br><br><button type='button' class='btn btn-theme' data-toggle='modal' data-target='#delModalEv' onclick=\"document.getElementById('idEvE').value='"+list[i].idEvenement+"';\">Supprimer</button></td></tr>";
	}
    rep+=printtablefooterE();
	$('#contenuEv').html(rep);
}

    var eventsVue=function(reponse){
	var action=reponse.action;
 //   console.log(action);   
	switch(action){
		case "enregistrerEvents" :
		case "enleverEvent" :
		case "modifierEvent":
		     alert(reponse.msg);   
		break;
		case "afficherEv" :
			afficher(reponse.listeEv);
		break;
		
		case "listeEvents":
		     listerEvents(reponse.listeEv);
		break;
		
		
	}
}

