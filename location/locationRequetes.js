/*function enregistrer(){
	var formClient = new FormData(document.getElementById('formEnreg'));
	formClient.append('action','enregistrer');
	$.ajax({
		type : 'POST',
		url : 'Clients/clientsControleur.php',
		data : formClient,
		dataType : 'xml', //text pour le voir en format de string
		async : false,
		cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					clientsVue(reponse);
		},
		fail : function (err){
		   
		}
	});
}
*/

function charger()
{
    $.ajax({
        data: {"action" : "chargerLocalites"},
        type: "POST",
        dataType: "json",
        url: "location/locationControleur.php",
        success: function (reponse){
                chargerSL(reponse);
            },
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
         //    console.log( "Success!" );
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  errorThrown);
         }
    }); 
}
function chargerVilles()
{
    $.ajax({
        data: {"action" : "chargerVille"},
        type: "POST",
        dataType: "json",
        url: "location/locationControleur.php",
        success: function (reponse){
                chargerV(reponse);
            },
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
         //    console.log( "Success!" );
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  errorThrown);
         }
    }); 
}
function listerEvent()
{
    $.ajax({
        data: {"action" : "montrerEvents"},
        type: "POST",
        dataType: "json",
        url: "location/locationControleur.php",
        success: function (reponse){
                listerEv(reponse);
            },
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
         //    console.log( "Success!" );
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  errorThrown);
         }
    }); 
}
function listerProd(){
      $.ajax({
        data: {"action" : "montrerProduits"},
        type: "POST",
        dataType: "json",
        url: "location/locationControleur.php",
        success: function (reponse){
                listerPr(reponse);
            },
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
         //    console.log( "Success!" );
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log(jqXHR+" Status: "+textStatus);
             console.log( "La solicitud a fallado: " +  errorThrown);
         }
    }); 
    
}

function lister(){
    $.ajax({
        data: {"action" : "montrerPoints"},
        type: "POST",
        dataType: "json",
        url: "location/locationControleur.php",
        success: function (reponse){
                listerP(reponse);
            },
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
             console.log( "Success!" );
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  errorThrown);
         }
    });
}
function listerEvMap(){
    $.ajax({
        data: {"action" : "montrerPointsE"},
        type: "POST",
        dataType: "json",
        url: "location/locationControleur.php",
        success: function (reponse){
                listerEE(reponse);
            },
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
             console.log( "Success!" );
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  errorThrown);
         }
    });
}
   /* var formLocation = new FormData(document.getElementById('formLister'));
	formLocation.append('action','lister');
        $.ajax({
            type : 'POST',
            url : 'js/puntos.js',
            data : {'action':'lister'},
            dataType : 'json', 
            success : function (reponse){
                console.log('Success');
                listerP(reponse);
            },
            fail : function (){
               console.log('Error');
            }
        });
    } */

