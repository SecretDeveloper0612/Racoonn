"use client";

import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 28.55,
  lng: 77.15
}; // General Delhi NCR center

const markers = [
  { id: 1, price: '₹1,299', lat: 28.65, lng: 77.22, active: false },
  { id: 2, price: '₹1,497', lat: 28.62, lng: 77.20, active: true },
  { id: 3, price: '₹1,836', lat: 28.60, lng: 77.18, active: false },
  { id: 4, price: '₹11,497', lat: 28.55, lng: 77.05, active: false }, // Gurgaon
  { id: 5, price: '₹10,925', lat: 28.50, lng: 77.08, active: false },
  { id: 6, price: '₹15,997', lat: 28.45, lng: 77.02, active: false }, 
  { id: 7, price: '₹1,799', lat: 28.35, lng: 77.30, active: false }, // Faridabad
  { id: 8, price: '₹2,480', lat: 28.58, lng: 77.35, active: false }, // Noida
];

export default function MapMockup() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '' // Works in development mode
  });

  const [map, setMap] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);

  const onLoad = useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <div className="relative w-full h-full bg-gray-200 overflow-hidden">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            disableDefaultUI: true, // hide default controls
            zoomControl: true,
          }}
        >
          {/* Custom Markers using OverlayView */}
          {markers.map((marker) => (
            <OverlayView
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <button
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 font-bold text-[14px] shadow-lg transition-transform z-20 ${
                  marker.active || hoveredMarker === marker.id 
                    ? 'bg-gray-900 text-white scale-110' 
                    : 'bg-white text-gray-900 hover:scale-105'
                }`}
                onMouseEnter={() => setHoveredMarker(marker.id)}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                {marker.price}
              </button>
            </OverlayView>
          ))}
        </GoogleMap>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="animate-pulse w-10 h-10 border-4 border-gray-300 border-t-brand-navy rounded-full animate-spin"></div>
        </div>
      )}

      {/* Search as I move map toggle */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 z-10 pointer-events-auto">
        <span className="text-[14px] font-semibold text-gray-800 whitespace-nowrap">Search as I move the map</span>
        <div className="w-10 h-6 bg-gray-800 rounded-full p-1 cursor-pointer flex justify-end">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
