let map

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: {lat: 1.3521, lng: 103.8198}
    });

    var marker_1 = new google.maps.Marker({
      position: {lat: 1.3285453551053334, lng: 103.67846281115466},
      map: map,
      title: 'Shop'
    });

    var marker_2 = new google.maps.Marker({
      position: {lat: 1.324082763178704, lng: 103.80992252206674},
      map: map,
      title: 'Shop'
    });

    var marker_3 = new google.maps.Marker({
      position: {lat: 1.3714634473719869, lng: 103.8470701533297},
      map: map,
      title: 'Shop'
    });
  }
