let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -40.901, lng: 174.886 },
    zoom: 6
  });

  //an array with map data on each attraction.
  const attractionInfo = [
    {
      coords: { lat: -36.9938006, lng: 174.8836618 },
      content: "<h1>Rainbow's End</h1>"
    },
    {
      coords: { lat: -38.0830395, lng: 176.1882802 },
      content: "<h1>ZORB™ Rotorua</h1>"
    }
  ];

  //loop over the attraction info and create a marker for each.
  attractionInfo.forEach(addMarker);

  //Add marker function
  //accepts an object with NZ Attractions info.
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
    });
    //check to see if there's a custom marker
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    //check to see if there's a custom marker
    if (props.content) {
      //if there is, create an info window
      const infoWindow = new google.maps.InfoWindow({
        content: props.content
      });
      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
    }
  }
}
