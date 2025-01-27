document.addEventListener('DOMContentLoaded', () => {
    const map = new maplibregl.Map({
        container: 'map',
        style: {
            version: 8,
            sources: {
                'terrain': {
                    type: 'raster',
                    tiles: [`https://maptoolkit.p.rapidapi.com/tiles/{z}/{x}/{y}/terrain.png?rapidapi-key=${config.apiKey}`],
                    tileSize: 256,
                    attribution: 'MapToolkit'
                },
                'hillshade': {
                    type: 'raster',
                    tiles: [`https://maptoolkit.p.rapidapi.com/tiles/{z}/{x}/{y}/hillshading.png?rapidapi-key=${config.apiKey}`],
                    tileSize: 256,
                    attribution: 'MapToolkit'
                }
            },
            layers: [
                {
                    id: 'terrain-layer',
                    type: 'raster',
                    source: 'terrain',
                    minzoom: 0,
                    maxzoom: 22
                },
                {
                    id: 'hillshade-layer',
                    type: 'raster',
                    source: 'hillshade',
                    minzoom: 0,
                    maxzoom: 14,
                    paint: {
                        'raster-opacity': 0.3
                    }
                }
            ]
        },
        center: [11.5820, 48.1351],
        zoom: 10
    });

    map.addControl(new maplibregl.NavigationControl());
});