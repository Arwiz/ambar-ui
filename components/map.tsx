// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css';
// import { useState, useEffect, useRef } from 'react';
// import L, { LatLngExpression } from 'leaflet';


// // function Map() {
// //   const [map, setMap] = useState<L.Map | null>(null);
// //   const [center, setCenter] = useState<LatLngExpression | null>(null);
// //   const mapRef = useRef<HTMLDivElement>(null);
  

// //     useEffect(() => {
// //         if (!map && mapRef.current?.id) {
// //             const leafletMap = L.map(mapRef.current!.id).setView([51.505, -0.09], 13);
// //             setMap(leafletMap);

// //             const map = L.map('map').setView([51.505, -0.09], 13);
// // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //   attribution: 'Map data &copy; OpenStreetMap contributors',
// // }).addTo(map);

// // const marker = L.marker([51.5, -0.09]).addTo(map);
// //         }

// //     }, []);
      
        
// //     useEffect(() => {
// //      if (map) {
// //       map.on('move', () => {
// //         setCenter(map.getCenter());
// //       });
// //     }
// //   }, [map]);


// //     return (
// //     <div ref={mapRef} style={{ height: '100vh' }}>
// //        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
// //       <TileLayer
// //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       />
// //       <Marker position={[51.505, -0.09]}>
// //         <Popup>
// //           A pretty CSS3 popup. <br /> Easily customizable.
// //         </Popup>
// //       </Marker>
// //       </MapContainer>
      
// //        {center && (
// //         <p>Center: {center.lat.toFixed(4)}, {center.lng.toFixed(4)}</p>
// //             )}
// //  </div>
    
// //   );
// // }


// L.Icon.Default.imagePath =
// '../node_modules/leaflet'


// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

// interface MapProps {
//     center: [number, number];
// }

// const Map: React.FC<MapProps> = ({ center = [40.7128, -74.006] }) => {
//   const mapRef = useRef(null);

//     useEffect(() => {
//         if (mapRef.current) {
//             let map = L.map(mapRef.current).setView(center, 13);
//             L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                 attribution: 'Map data &copy; OpenStreetMap contributors',
//             }).addTo(map);
//             L.marker(center).addTo(map);
        
//             // Cleanup function to remove map
//             return () => {
//                 map?.remove();
//             }
//         }
//   }, [center]);

//   return (
//     <div
//       ref={mapRef}
//       style={{ height: '500px', width: '100%' }}
//     ></div>
//   );
// };

// export default Map;


import React, { useState, useEffect } from "react";
import { MapContainer, Circle, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ coordinates = [40.7128, -74.006] }) {
   const position = coordinates;
   const fillBlueOptions = { fillColor: "#0484D6" };
   const [map, setMap] = useState(null);

   useEffect(() => {
      if (map) {
         setInterval(function () {
            map.invalidateSize();
         }, 100);
      }
   }, [map]);

   return (
      <MapContainer center={position} zoom={20} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }} whenCreated={setMap}>
         <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         <Circle center={position} pathOptions={fillBlueOptions} radius={50} />
      </MapContainer>
   );
}

export default Map;