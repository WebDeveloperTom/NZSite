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
      content:
        "<h3>Rainbow's End</h3>" +
        "<p>New Zealand's best and ONLY theme park!</p>"
    },
    {
      coords: { lat: -38.0830395, lng: 176.1882802 },
      content:
        "<h3>ZORB™ Rotorua</h3>" +
        "<p>Ever wanted to roll down a hill INSIDE a ball?</p>"
    },
    {
      coords: { lat: -45.03092, lng: 168.660166 },
      content:
        "<h3>AJ Hackett Bungy</h3>" +
        "<p>Ever wanted to let your life hang by a thick, elastic thread?</p>"
    },
    // {
    //   coords: { lat: -37.8723, lng: 175.6834 },
    //   content: "<p> Hobbiton Movie set</p>"
    // },
    {
      coords: { lat: -39.3044, lng: 175.5269 },
      content:
        "<h3>Turoa Skifield</h3>" +
        "<p>Don't let the breathtaking views distract you!</p>"
    },
    {
      coords: { lat: -41.2784, lng: 174.7767 },
      content: "<h3>The Beehive</h3>" + "<p>Politics? Am I right?!</p>"
    },
    {
      coords: { lat: -43.5848, lng: 172.7077 },
      content:
        "<h3>Christchurch Gondola</h3>" +
        "<p>Whether you call it a cable car or a gondola, this is a must!</p>"
    },
    {
      coords: { lat: -45.8667, lng: 170.6667 },
      content:
        "<h3>The Otago Peninsula</h3>" +
        "<p>Otago Peninsula, Dunedin, Wildlife capital of New Zealand!</p>"
    },
    {
      coords: { lat: -46.4095, lng: 168.3804 },
      content:
        "<a href='https://www.transportworld.co.nz/transport-world/'><h3>Bill Richardson Transport World</h3></a>" +
        "<p>The largest private automotive museum of its type in the world.</p>"
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
      if (props.content) {
        //if there is, create an info window
        const infoWindow = new google.maps.InfoWindow({
          content: props.content
        });
        marker.addListener("mouseover", function() {
          infoWindow.open(map, marker);
        });

        //hover effect, infoWindow appears for 2.5s and then
        marker.addListener("mouseout", function() {
          setTimeout(function() {
            infoWindow.close(map, marker);
          }, 2500);
        });
      }
    }, 2000);
  }
}
