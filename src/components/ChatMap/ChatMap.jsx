import React from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { GeoJSON } from 'react-leaflet';
import mapData from '../../data/countries.json';
import 'leaflet/dist/leaflet.css';

import '../../css/ChatMap.css';

// import { TileLayer } from 'react-leaflet/TileLayer';
// import { useMap } from 'react-leaflet/hooks';
// import { MapContainer, TileLayer, useMap } from 'react-leaflet';

export default function ChatMap() {
console.log(mapData);

  return (
    <div>
      ChatMap
      <MapContainer
        style={{ width: "1000px", height: "700px" }}
        zoom={2}
        center={[40, 0]}
      >
        <GeoJSON data={mapData.features}/>
      </MapContainer>
    </div>
  );
}
