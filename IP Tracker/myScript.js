 function loadMap(){
    var mymap = L.map('my-map').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(mymap);
    };
    loadMap();
    
