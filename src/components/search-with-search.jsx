"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const accessToken = process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN;

export default function MapWithSearch() {
  const mapContainerRef = useRef();
  const mapInstanceRef = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    mapboxgl.accessToken = accessToken;

    mapInstanceRef.current = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      center: [-122.4, 37.8], // starting position [lng, lat]
      zoom: 14, // starting zoom
      style: "mapbox://styles/mohammedouzaa/clx0mnl3p01jy01pnc04fhh0x",
    });

    mapInstanceRef.current.on("load", () => {
      setMapLoaded(true);
    });
  }, []);

  return (
    <div className="absolute w-full">
      <div className="w-[400px] absolute inset-0 z-10 top-4 left-7">
        <SearchBox
          accessToken={accessToken}
          map={mapInstanceRef.current}
          mapboxgl={mapboxgl}
          value={inputValue}
          onChange={(d) => {
            setInputValue(d);
          }}
          theme={{ variables: { boxShadow: "0 0 0 1px silver" } }}
        />
      </div>
      <div
        className="relative h-screen"
        id="map-container"
        ref={mapContainerRef}
      />
    </div>
  );
}
