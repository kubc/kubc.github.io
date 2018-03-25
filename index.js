function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 35.025,
      lng: 135.7802
    },
    zoom: 17
  });
  const opts = [{
    position: new google.maps.LatLng(35.024, 135.77876),
    content: "部室"
  }, {
    position: new google.maps.LatLng(35.0255, 135.78088),
    content: "クスノキ前（新勧集合場所）"
  }];
  opts.forEach(x => {
    infoWindow = new google.maps.InfoWindow(x);
    infoWindow.open(map);
  });
}