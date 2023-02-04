let map, searchManager;
let apiKey1 = "AoikwZupOMBoYuMeQAhczv5lIbxfubsseUobK8QlRbAdl3LdX2ZrGd0gOm2AmFdN";
let apiKey2 = "Avccz85Vw29puwTVhAPck97RhHVtKwmYyK-mU6YG5UNNQqA7Q0F4ZGXjIGWuRy09";

function getMap(){
    map = new Microsoft.Maps.Map('#map', {
    credentials: apiKey1
    });

    var location_1 = new Microsoft.Maps.Location(1.3295141648280284, 103.67755912597347)

    var pin_1 = new Microsoft.Maps.Pushpin(location_1, {
        title: 'Shop'
    });
    map.entities.push(pin_1);

    var location_2 = new Microsoft.Maps.Location(1.2996485152337425, 103.80396932929241)

    var pin_2 = new Microsoft.Maps.Pushpin(location_2, {
        title: 'Shop'
    });
    map.entities.push(pin_2);

    var location_3 = new Microsoft.Maps.Location(1.3717093159107367, 103.84839598153981)

    var pin_3 = new Microsoft.Maps.Pushpin(location_3, {
        title: 'Shop'
    });
    map.entities.push(pin_3);

    map = new Microsoft.Maps.Map('#map', {
        credentials: apiKey2
        });
    
        var location_1 = new Microsoft.Maps.Location(1.3295141648280284, 103.67755912597347)
    
        var pin_1 = new Microsoft.Maps.Pushpin(location_1, {
            title: 'Shop'
        });
        map.entities.push(pin_1);
    
        var location_2 = new Microsoft.Maps.Location(1.2996485152337425, 103.80396932929241)
    
        var pin_2 = new Microsoft.Maps.Pushpin(location_2, {
            title: 'Shop'
        });
        map.entities.push(pin_2);
    
        var location_3 = new Microsoft.Maps.Location(1.3717093159107367, 103.84839598153981)
    
        var pin_3 = new Microsoft.Maps.Pushpin(location_3, {
            title: 'Shop'
        });
        map.entities.push(pin_3);
};
