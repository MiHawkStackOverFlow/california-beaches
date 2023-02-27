import { Box } from "@mui/material";
import React from "react";
import GoogleMapReact from "google-map-react";

export default function Map() {
  let defaultProps = {
    center: {
      lat: 41.973501,
      lng: -124.203663
    }
  };
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.BEACH_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={14}
      />
    </Box>
  );
}
