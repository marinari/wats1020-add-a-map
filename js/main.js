/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.
   */
$( document ).ready(function() {
  var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 6, maxZoom: 16, attribution: osmAttrib});

  var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
      subdomains: ['otile1','otile2','otile3','otile4']
  });

  var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
      subdomains: ['otile1','otile2','otile3','otile4']
  });

  var mapLayers = {
      "Satellite": satLayer,
      "Map View": drawLayer,
      "Open Street Maps": osm
  }

  var map = L.map('map-container').setView([47.621729, -122.350072], 16);

  L.control.layers(mapLayers).addTo(map);
  satLayer.addTo(map);

  var marker = L.marker([47.620580, -122.349356]).addTo(map);
  marker.bindPopup("The Space Needle").openPopup();

  var marker2 = L.marker([47.622460, -122.352022]).addTo(map);
  marker2.bindPopup("The Experience Music Project Museum").openPopup();

  var marker3 = L.marker([47.622536, -122.351856]).addTo(map);
  marker3.bindPopup("The International Fountain").openPopup();

});



// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)


/*
var marker = L.marker([46.852, -121.760]).addTo(map);
marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");

var circle = L.circle([47.620391, -122.349074, 500, {
  color: '#8B89BA',
  fillColor: '#BEBBFF',
  fillOpacity: 0.5
}).addTo(map);
*/
