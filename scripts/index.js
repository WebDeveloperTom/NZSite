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
      content: "<p>Rainbow's End</p>"
    },
    {
      coords: { lat: -38.0830395, lng: 176.1882802 },
      content: "<h3>ZORB™ Rotorua</h3>"
    },
    {
      coords: { lat: -45.03092, lng: 168.660166 },
      content: "<h3>AJ Hackett Bungy</h3>"
    },
    {
      coords: { lat: -37.8723, lng: 175.6834 },
      content: "<p> Hobbiton Movie set</p>"
    },

    {
      coords: { lat: -39.3044, lng: 175.5269 },
      content: "<h3>Turoa Skifield</h3>"
    },
    {
      coords: { lat: -41.2784, lng: 174.7767 },
      content: "<h3>The Beehive</h3>"
    },
    {
      coords: { lat: -43.5848, lng: 172.7077 },
      content: "<h3>Christchurch Gondola</h3>"
    },
    {
      coords: { lat: -45.8667, lng: 170.6667 },
      content: "<h3>The Otago Peninsula</h3>"
    },
    {
      coords: { lat: -46.4095, lng: 168.3804 },
      content: "<h3>Bill Richardson Transport World</h3>"
    }
  ];

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
        marker.addListener("mouseover", function() {
          infoWindow.open(map, marker);
        });

        marker.addListener("mouseout", function() {
          setTimeout(function() {
            infoWindow.close(map, marker);
          }, 2000);
        });
      }
    }, 2000);
  }
}
