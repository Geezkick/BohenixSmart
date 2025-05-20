import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';

const LiveMap = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [36.8219, -1.2921], // Nairobi coordinates
      zoom: 12,
    });

    // Add real-time traffic layer
    map.on('load', () => {
      map.addSource('traffic', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-traffic-v1',
      });
      map.addLayer({
        id: 'traffic-layer',
        type: 'line',
        source: 'traffic',
        'source-layer': 'traffic',
        paint: {
          'line-color': [
            'case',
            ['==', ['get', 'congestion'], 'low'],
            '#4CAF50',
            ['==', ['get', 'congestion'], 'moderate'],
            '#FFC107',
            '#FF5252'
          ],
          'line-width': 4,
        },
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div className="rounded-xl overflow-hidden border border-[#ffffff10] h-[600px] relative">
      <div id="map" className="w-full h-full" />
      <div className="absolute top-4 right-4 bg-[#1f1f1f] p-4 rounded-lg shadow-lg">
        <h4 className="text-white font-semibold mb-2">Legend</h4>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-[#4CAF50] rounded-sm" />
          <span className="text-gray-300">Low Traffic</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-[#FFC107] rounded-sm" />
          <span className="text-gray-300">Moderate</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#FF5252] rounded-sm" />
          <span className="text-gray-300">High Traffic</span>
        </div>
      </div>
    </div>
  );
};

export default LiveMap;