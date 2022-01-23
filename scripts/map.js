
var center = [-33.8650, 151.2094];


var map = L.map('contactMapId').setView(center, 3);


setTimeout(() =>{
    L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18
        }).addTo(map);
      L.marker(center).addTo(map);
},500);