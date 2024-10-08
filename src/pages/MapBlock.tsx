import React from 'react';
import { Map } from '../components/Map';

interface Coordinates {
  lat: number;
  lng: number;
  location?: string;
  temperature?: {
    value: number;
    units: string;
  };
  wind_speed?: {
    value: number;
    units: string;
  };
}

interface MapBlockProps {
  coords: Coordinates | null;
  marker: Coordinates | null;
}

export function MapBlock({ coords, marker }: MapBlockProps) {
  return (
    <div className="content-block map">
      <div className="content-block-title">get_weather()</div>
      <div className="content-block-title bottom">
        {marker?.location || 'not yet retrieved'}
        {!!marker?.temperature && (
          <>
            <br />
            🌡️ {marker.temperature.value} {marker.temperature.units}
          </>
        )}
        {!!marker?.wind_speed && (
          <>
            {' '}
            🍃 {marker.wind_speed.value} {marker.wind_speed.units}
          </>
        )}
      </div>
      <div className="content-block-body full">
        {coords && (
          <Map center={[coords.lat, coords.lng]} location={coords.location} />
        )}
      </div>
    </div>
  );
}
