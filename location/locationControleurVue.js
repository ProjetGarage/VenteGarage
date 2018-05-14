//montrer des points sur la map
function listerP(results){
        for (var i = 0; i < results.length; i++) {
          var latLng = new google.maps.LatLng(results[i].latitude,results[i].longitude);
          createMarker(results[i]);
        }
function createMarker(place) {
          infowindow = new google.maps.InfoWindow();
          //var iconvalue=place.icon;
          var iconvalue="";
          if (iconvalue.length>0)
              iconvalue="img/"+iconvalue;
          var latLng = new google.maps.LatLng(place.latitude,place.longitude);
          var marker = new google.maps.Marker({
            map: map,
            position: latLng,
            icon: iconvalue,
            disableAutoPan: false
        });

        google.maps.event.addListener(marker, 'click', function() {
            content="<div style='overflow:hidden;color:gray'><sub><h5><b>"+place.prenom+" "+place.nom+"</b></h5></sub><hr><sub><img src='img/icon_s.png' width='20'>"+(place.sublocalite.length>0 ? place.sublocalite+",":"")+place.ville+","+place.region+"</div>";
            infowindow.setContent(content);
            infowindow.open(map, this);
        });          
      }
}
function listerEE(results){
        for (var i = 0; i < results.length; i++) {
          var latLng = new google.maps.LatLng(results[i].latitude,results[i].longitude);
          createMarker(results[i]);
        }
      function createMarker(place) {
          infowindow = new google.maps.InfoWindow();
          //var iconvalue=place.icon;
          var iconvalue="gvente.png";
          if (iconvalue.length>0)
              iconvalue="img/"+iconvalue;
          var latLng = new google.maps.LatLng(place.latitude,place.longitude);
          var marker = new google.maps.Marker({
            map: map,
            position: latLng,
            icon: iconvalue,
            disableAutoPan: false
        });

        google.maps.event.addListener(marker, 'click', function() {
            content="<div style='overflow:hidden;color:gray'><sub><h5><b>"+place.prenom+" "+place.nom+"</b></h5></sub><hr><sub><img src='img/icon_s.png' width='20'>"+(place.sublocalite.length>0 ? place.sublocalite+",":"")+place.ville+","+place.region+"</div>";
            infowindow.setContent(content);
            infowindow.open(map, this);
        });          
      }
}
//montrer les produits reliée 
function listerPr(results){
     document.getElementById('products').innerHTML+="<div class='col-sm-2'>";
     document.getElementById('products').innerHTML+="<div class='row'><hr></div>";
    for (var i = 0; i < results.length; i++) {
      document.getElementById('products').innerHTML+="<div class='row'>"+results[i].nomProduit+"</div>";
      document.getElementById('products').innerHTML+="<div class='row'>"+results[i].description+"</div>";
      document.getElementById('products').innerHTML+="<div class='row'><hr></div>";     
    }
     document.getElementById('products').innerHTML+="</div>";
}
//montrer les events 
function listerEv(results){
    document.getElementById('products').innerHTML+="<div class='row row_style'><hr></div>";
    for (var i = 0; i < results.length; i++) {
      document.getElementById('products').innerHTML+="<div class='row row_style'><h6>"+results[i].titreEvenement+"</h6></div>";
      document.getElementById('products').innerHTML+="<div class='row row_style'><p>"+results[i].description+"</p></div>";
      document.getElementById('products').innerHTML+="<div class='row row_style'><hr></div>";     
    }
}
function chargerSL(results){
     
    /*results.forEach( function(valor, indice, array) {
        console.log("En el índice " + indice + " hay este valor: " + valor);
    });*/
    var x = document.getElementById("idLocalite");    
    for (var i = 0; i < results.length; i++) {
        var option = document.createElement("option");
            option.text = results[i]["sublocalite"];
            x.add(option);
    }
}
function chargerV(results){
     
    /*results.forEach( function(valor, indice, array) {
        console.log("En el índice " + indice + " hay este valor: " + valor);
    });*/
     //console.log(results)
    $('idVille').empty();
    var x = document.getElementById("idVille");    
    for (var i = 0; i < results.length; i++) {
        var option = document.createElement("option");
            option.text = results[i]["ville"];
            x.add(option);
    }
}