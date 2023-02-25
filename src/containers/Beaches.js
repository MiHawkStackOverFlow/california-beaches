import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CALIFORNIA_BEACHES_API_URL } from '../config';

export default function Beaches() {
  const [beachData, setBeachData] = useState(null);
  useEffect(() => {
    axios.get(CALIFORNIA_BEACHES_API_URL).then((response) => { 
      if(response.status >= 200 && response.status < 300) {
        let newBeachData = response.data;
        setBeachData(newBeachData);
      }
    });
  }, []);
  return (
    <Box>
       { beachData ? beachData.map((beach) => {
          return <h1>{ beach.NameMobileWeb }</h1>
       }) : <CircularProgress style={{ marginTop: 100, marginLeft: 150 }} />}
    </Box>
  )
}