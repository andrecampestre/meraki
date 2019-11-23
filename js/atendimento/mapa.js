var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('section-mapa'), {
    center: { lat: -23.5489, lng: -46.6388 },
    zoom: 8
  });
}

// document.querySelector('#button_atendimento').classList.add('button');
// document.querySelector('#button_atendimento').classList.add('button--light');
