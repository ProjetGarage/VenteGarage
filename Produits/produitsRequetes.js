//requêtes produits

function listerProduitsVendeur()
{
	var formProduit = new FormData(document.getElementById('formRecherche'));
	formProduit.append('action','listeProduits');
	$.ajax({
		type : 'POST',
		url :  'Produits/produitsControleur.php',
		data : formProduit,
		dataType : 'json', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					 produitsVue(reponse);
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
		url :  'Produits/produitsControleur.php',
		data : formProduit,
		dataType : 'json', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					produitsVue(reponse);
		},
		fail : function (err){
		   
		}
	});	

}

function lister() {
	var formProduit = new FormData();
	formProduit.append('action','listeP');
	$.ajax({
		type : 'POST',
		url :  'Produits/produitsControleur.php',
		data : formProduit,
		dataType : 'json', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					produitsVue(reponse);
		},
		fail : function (err){
		   
		}
	});
	
}

function listerC() {
	var formProduit = new FormData();
	formProduit.append('action','listeCat');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url :  'Produits/produitsControleur.php',
		data : formProduit,
		dataType : 'json', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					produitsVue(reponse);
		},
		fail : function (err){
		   
		}
	});
	
}

function afficherP() {
	var formProduit = new FormData();
	formProduit.append('action','afficherP');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url :  'Produits/produitsControleur.php',
		data : formProduit,
		dataType : 'json', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					produitsVue(reponse);
		},
		fail : function (err){
		   
		}
	});
	
}

function enregistrer(){
	var formProduit = new FormData(document.getElementById('formEnreg'));
	formProduit.append('action','enregistrer');
	$.ajax({
		type :'POST',
		url : 'Produits/produitsControleur.php',
		data : formProduit,
		dataType : 'text', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){alert(reponse);
					//produitsVue(reponse);
		},
		fail : function (err){
		   
		}
	});
}

function remplirListeCategories() {
	var formProduit = new FormData();
	formProduit.append('action','listeC');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url :  'Produits/produitsControleur.php',
		data : formProduit,
		dataType : 'json', //text pour le voir en format de string
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					produitsVue(reponse);
		},
		fail : function (err){
		   
		}
	});
	
}



function enlever(){
	var leForm=document.getElementById('formEnlever');
	var formProduit = new FormData(leForm);
	formProduit.append('action','enlever');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Produits/produitsControleur.php',
		data : formProduit,//leForm.serialize(),
		contentType : false, //Enlever ces deux directives si vous utilisez serialize()
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					produitsVue(reponse);
		},
		fail : function (err){
		}
	});
}


function obtenirFiche(){
	
	$('#divFiche').hide();
	var leForm=document.getElementById('formFiche');
	var formProduit = new FormData(leForm);
	formProduit.append('action','obtenirFiche');//alert(formProduit.action);
	$.ajax({
		type : 'POST',
		url :  'Produits/produitsControleur.php',
		data : formProduit,
		async: false,
		cache: false,
		contentType : false, 
		processData : false,
		enctype: 'multipart/form-data',
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					produitsVue(reponse);
		},
		fail : function (err){
            console.log(err);
		}
	});
}

function modifierProd(){
	var leForm=document.getElementById('formModifyPr');
	var formProduit = new FormData(leForm);
	formProduit.append('action','modifier');
	$.ajax({
		type : 'POST',
		url : 'Produits/produitsControleur.php',
		data : formProduit,
		contentType : false, 
		processData : false,
		dataType : 'text', 
		success : function (reponse){alert(reponse);
					//$('#divFormFiche').hide();
					produitsVue(reponse);
		},
		fail : function (err){
		}
	});
}
	

