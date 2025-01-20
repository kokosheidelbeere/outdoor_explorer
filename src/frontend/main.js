const map = new maplibregl.Map({
    container: 'map',
    style: 'https://static.maptoolkit.net/rapidapi/styles/terrain.json?rapidapi-key=YOUR_API_KEY', // Replace with your API key
    center: [13.404954, 52.520008], 
    zoom: 9
});

map.addControl(new maplibregl.NavigationControl());