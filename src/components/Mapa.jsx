import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
  
  return (
    <MapContainer center={[-33.42889494695657, -70.65132124623628]} zoom={18} scrollWheelZoom={true} style={{ height: '400px', width:'600px' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     
      
  </MapContainer>
  )
}

export default Mapa