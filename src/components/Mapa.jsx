import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
  const customIcon = L.icon({
    iconUrl: 'https://example.com/custom-icon.png',
    iconSize: [32, 32],
  });
  return (
    <MapContainer center={[-33.42889494695657, -70.65132124623628]} zoom={18} scrollWheelZoom={false} style={{ height: '400px', width:'600px' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     <Marker position={[-33.42889494695657, -70.65132124623628]} icon={customIcon}>
        <Popup>
          Un marcador personalizado
        </Popup>
      </Marker>
  </MapContainer>
  )
}

export default Mapa