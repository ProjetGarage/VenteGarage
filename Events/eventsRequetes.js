//requêtes events

function listerEventsVendeur()
{
	var formProduit = new FormData(document.getElementById('formRecherche'));
	formProduit.append('action','listeEvents');
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
		   console.log(err);
		}
	});	

}

function remplirListeE()
{
	var formProduit = new FormData();
	formProduit.append('action','listeE');
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

function lister() {
	var formProduit = new FormData();
	formProduit.append('action','listeEv');
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

function afficherEv() {
	var formProduit = new FormData();
	formProduit.append('action','afficherP');//alert(formFilm.get("action"));
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

function enregistrerProd(){
	var formProduit = new FormData(document.getElementById('formEnregEv'));
	formProduit.append('action','enregistrerEvents');
	$.ajax({
		type :'POST',
		url : 'Events/eventsControleur.php',
		data : formProduit,
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
	var formProduit = new FormData(leForm);
	formProduit.append('action','enleverEvent');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Events/eventsControleur.php',
		data : formProduit,//leForm.serialize(),
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
	var leForm=document.getElementById('formModifyPr');
	var formProduit = new FormData(leForm);
	formProduit.append('action','modifierProduit');
	$.ajax({
		type : 'POST',
		url : 'Events/eventsControleur.php',
		data : formProduit,
		contentType : false, 
		processData : false,
		dataType : 'text', 
		success : function (reponse){alert(reponse);
					//$('#divFormFiche').hide();
					eventsVue(reponse);
		},
		fail : function (err){
            console.log(err);
		}
	});
}
	

