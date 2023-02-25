import { Box, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BeachCard from "../components/BeachCard";
import { CALIFORNIA_BEACHES_API_URL } from '../config';

export default function Beaches() {
  const [beachData, setBeachData] = useState(null);
  useEffect(() => {
    axios.get(CALIFORNIA_BEACHES_API_URL).then((response) => { 
      if(response.status >= 200 && response.status < 300) {
        const results = response.data;
        let newBeachData = [];
        results.forEach((beach) => {
          let beachObject = {
            id: beach.ID,
            image: (beach.Photo_1 ? beach.Photo_1 : (beach.Photo_2 ? beach.Photo_2 : (beach.Photo_3 ? beach.Photo_3 : (beach.Photo_4 ? beach.Photo_4 : null)))),
            name: beach.NameMobileWeb 
          };
          newBeachData.push(beachObject);   
        });
        setBeachData(newBeachData);
      }
    });
  }, []);
  return (
    <Box>
       { beachData ? (
          <Grid style={{ marginTop: 50 }} container spacing={2}>
            { beachData.map((beach) => { 
              return (
                <BeachCard key={beach.id} beach={beach} image={beach.image}/>
              )  
            })}
          </Grid>
       ) : (<CircularProgress style={{ marginTop: 100, marginLeft: 150 }} /> )}
    </Box>
  )
}