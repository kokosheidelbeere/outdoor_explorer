const map = new maplibregl.Map({
    container: 'map',
    style: 'https://static.maptoolkit.net/rapidapi/styles/terrain.json?rapidapi-key=71c70f9754msha111b1dff3c8c49p172391jsn3e41185c11e5',
    center: [13.404954, 52.520008], 
    zoom: 9
});

map.addControl(new maplibregl.NavigationControl());