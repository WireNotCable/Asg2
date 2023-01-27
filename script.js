// Create a map object
var map = new Microsoft.Maps.Map('#map', {
    center: new Microsoft.Maps.Location(37.7749, -122.4194), // set the center of the map
    zoom: 8
});

// Create a marker object
var marker = new Microsoft.Maps.Pushpin(map.getCenter(), {
    title: 'My Marker'
});

// Add the marker to the map
map.entities.push(marker);
