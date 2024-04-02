(function(){
    const map = L.map('mapid').setView([44.6488,-63.5752],13);//map setup
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    async function fetchBus() { //fetches data based on routes 1-10
        const response = await fetch('https://prog2700.onrender.com/hrmbuses');
        const data = await response.json();
        console.log("rawData", data);
       // return data;}
        return data.filter(bus => bus.route >= 1 && bus.route <= 10);//filter out all routes that arent between the 1 and the 10
    }

    fetchBus().then(buses => { //call function and process results
        console.log('Filtered Buses:', buses);
});

function convertToGeoJSON(buses) {
    return {
        type: 'FeatureCollection',
        features: buses.map(bus => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [bus.longitude, bus.latitude]
            },
            properties: {
                route: bus.route,
                
            }
        }))
    };
}

fetchBus().then(buses => {
    const geoJsonData = convertToGeoJSON(buses);
    L.geoJson(geoJsonData).addTo(map);
});

})();