function main()
{
    initMap();
    charger();
}
  function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: new google.maps.LatLng(45.5,-73),
          mapTypeId: 'terrain'
        });
      }