import { Box } from "@mui/material";
import React from "react";
import GoogleMapReact from "google-map-react";
import { useLocation } from 'react-router-dom'

export default function Map() {
  const location = useLocation();
  const { lat, lng } = location.state;
  let defaultProps = {
    center: {
      lat: lat,
      lng: lng
    }
  };
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.BEACH_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={17}
      />
    </Box>
  );
}
