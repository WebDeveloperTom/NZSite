let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -40.901, lng: 174.886 },
    zoom: 5
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
    },
    {
      coords: { lat: -45.03092, lng: 168.660166 },
      content: "<h1>AJ Hackett Bungy</h1>"
    },
    {
      coords: { lat: -38.110432, lng: 176.221969 },
      content: "<h1>Skyline Rotorua</h1>"
    },
    {
      coords: { lat: -39.3044, lng: 175.5269 },
      content: "<h1>Turoa Skifield</h1>"
    },
    {
      coords: { lat: -41.2784, lng: 174.7767 },
      content: "<h1>The Beehive</h1>"
    },
    {
      coords: { lat: -43.5848, lng: 172.7077 },
      content: "<h1>Christchurch Gondola</h1>"
    },
    {
      coords: { lat: -45.8667, lng: 170.6667 },
      content: "<h1>The Otago Peninsula</h1>"
    },
    {
      coords: { lat: -46.4095, lng: 168.3804 },
      content: "<h1>Bill Richardson Transport World</h1>"
    }
  ];
  //-38.110432,176.221969

  //loop over the attraction info and create a marker for each.
  attractionInfo.forEach(addMarker);

  //Add marker function
  //accepts an object with NZ Attractions info.
  function addMarker(props) {
    window.setTimeout(function() {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        animation: google.maps.Animation.DROP
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
    }, 2000);
  }
}
