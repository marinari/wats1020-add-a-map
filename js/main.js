/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.
   */
$( document ).ready(function() {

  // Inside of your on ready handler, invoke the Leaflet.js library to draw a map in your `#map-container` div.
  var mymap = L.map('map-container').setView([47.622255, -122.351292], 13);

  var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

  //Add 2 layers to your map.
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
  L.control.layers(mapLayers).addTo(map);
  satLayer.addTo(map);
});



// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)
/*
var circle = L.circle([47.620426, -122.349149, 250, {
  color: '#8B89BA',
  fillColor: '#BEBBFF',
  fillOpacity: 0.5
}).addTo(mymap);
*/

/*
var marker = L.marker([46.852, -121.760]).addTo(map);
marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
*/
