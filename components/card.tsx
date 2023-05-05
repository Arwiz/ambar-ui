import React, { useEffect } from 'react';
import Image from 'next/image';
import L from 'leaflet';
import dynamic from 'next/dynamic'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Link from 'next/link';

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src="https://source.unsplash.com/random/800x600"
        alt="card"
      />
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-2xl">Card Title</h2>
        <p className="mt-2 text-gray-600">Card Description</p>
      </div>
    </div>
  );
};


const AccidentCard = () => {
  const incidentId = 'acciden1234t';
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        width={300}
        height={300}
        src="/../public/images/car-accident.png"
        alt="card"
      />
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-2xl">Acident</h2>
        <p className="mt-2 text-gray-600">Accident Information  <Link href={`/CallHelp/${incidentId}`}>Show Details</Link></p>
        
      </div>
    </div>
  );
};


const PublicPropertyDamageCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
       <Image
        width={300}
        height={300}
        src="/../public/images/public-property.png"
        alt="card"
      />
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-2xl">Public Property</h2>
        <p className="mt-2 text-gray-600">Card Description</p>
      </div>
    </div>
  );
};


function MyMap() {
   const Map = dynamic(
    () => import('./map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
  return <Map />
}

export { Card, AccidentCard, PublicPropertyDamageCard, MyMap };
