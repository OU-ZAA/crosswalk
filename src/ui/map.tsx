"use client";

import * as React from "react";
import ReactMapGl from "react-map-gl";

export default function Map() {
  return (
    <ReactMapGl
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 13,
      }}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/mohammedouzaa/clx0mnl3p01jy01pnc04fhh0x"
      attributionControl={false}
    />
  );
}
