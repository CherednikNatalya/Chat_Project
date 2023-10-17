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

  let color = ['#ffd500', '#ffdc2e', '#ffe761', '#ffea76', '#fff394'];

  const countryStyle = {
    fillOpacity: 1,
    color: "#140951",
    weight: 1
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);

    // layer.options.fillOpacity = Math.random();
    const colorIndex = Math.floor(Math.random() * color.length);
    layer.options.fillColor = color[colorIndex];

    layer.on({
      click: (e) => {
        console.log(countryName);
      },
      mouseover: (e) => {
        e.target.setStyle({
          color: '#ffffff'
        });
      },
      mouseout: (e) => {
        e.target.setStyle({
          color: "#140951"
        });
      }
    });
  }

  return (
    <div className="map-container">
      <h1>Join to the room: </h1>
      <MapContainer
        style={{ width: "1000px", height: "700px" }}
        zoom={2}
        center={[40, 0]}
      >
        <GeoJSON style={countryStyle} data={mapData.features} onEachFeature={onEachCountry}/>
      </MapContainer>
    </div>
  );
}
