var map;
const rainbowsEnd = { lat: -36.9938006, lng: 174.8836618 };
const orb = { lat: -38.0830395, lng: 176.1882802 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -40.901, lng: 174.886 },
    zoom: 6
  });
  // var marker = new google.maps.Marker({
  //   position: rainbowsEnd,
  //   map: map
  // });
  //
  // const infoWindow = new google.maps.InfoWindow({
  //   content: "<h3>Rainbow's End </h3>"
  // });
  //
  // marker.addListener("click", function() {
  //   infoWindow.open(map, marker);
  // });

  addMarker({ coords: { lat: -36.9938006, lng: 174.8836618 } });
  addMarker({ coords: { lat: -38.0830395, lng: 176.1882802 } });

  //Add marker function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
    });
  }
}
