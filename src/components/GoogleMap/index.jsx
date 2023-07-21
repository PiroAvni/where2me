import React, { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
// import Button from '../Button';
import config from  '../../../config'
import './style.css'


const Map = ({ google, center, zoom }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:  config.googleMapsApiKey,
   
  });

  return (
    <div className="map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
};

export default Map;

