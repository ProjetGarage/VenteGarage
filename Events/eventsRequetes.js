//requêtes events
//liste les evenements
function listerEventsVendeur()
{
	var formEvent = new FormData(document.getElementById('formRecherche'));
	formEvent.append('action','listeEvents');
	$.ajax({
		type : 'POST',
		url :  'Events/eventsControleur.php',
		data : formEvent,
		dataType : 'json', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					eventsVue(reponse);
		},
		fail : function (err){
		   console.log(err);
		}
	});	
}

function remplirListeE()
{
	var formProduit = new FormData();
	formEvent.append('action','listeE');
	$.ajax({
		type : 'POST',
		url :  'Events/eventsControleur.php',
		data : formEvent,
		dataType : 'json', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					eventsVue(reponse);
		},
		fail : function (err){
		   
		}
	});	

}

function listerEvenements() {
	var formProduit = new FormData();
	formEvent.append('action','listeEv');
	$.ajax({
		type : 'POST',
		url :  'Events/eventsControleur.php',
		data : formEvent,
		dataType : 'json', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					eventsVue(reponse);
		},
		fail : function (err){
		   
		}
	});
	
}

function afficherEv() {
	var formEvent = new FormData();
	formEvent.append('action','afficherP');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url :  'Events/eventsControleur.php',
		data : formProduit,
		dataType : 'json', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					eventsVue(reponse);
		},
		fail : function (err){
		   
		}
	});
	
}

function enregistrerEv(){
	var formEvent = new FormData(document.getElementById('formEnregEv'));
	formEvent.append('action','enregistrerEvents');
	$.ajax({
		type :'POST',
		url : 'Events/eventsControleur.php',
		data : formEvent,
		dataType : 'text', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){alert(reponse);
					//eventsVue(reponse);
		},
		fail : function (err){
		   console.log
		}
	});
}


function enleverEv(){
	var leForm=document.getElementById('formEnleverEv');
	var formEvent = new FormData(leForm);
	formEvent.append('action','enleverEvent');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Events/eventsControleur.php',
		data : formEvent,//leForm.serialize(),
		contentType : false, //Enlever ces deux directives si vous utilisez serialize()
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					eventsVue(reponse);
		},
		fail : function (err){
		}
	});
}


function modifierEv(){
	var leForm=document.getElementById('formModifyEv');
	var formEvent = new FormData(leForm);
	formEvent.append('action','modifierEvent');
	$.ajax({
		type : 'POST',
		url : 'Events/eventsControleur.php',
		data : formEvent,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){alert(reponse);
					//$('#divFormFiche').hide();
					eventsVue(reponse);
		},
		fail : function (err){
            console.log(err);
		}
	});
}
	

