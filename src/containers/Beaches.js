import { Box, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BeachCard from "../components/BeachCard";
import { CALIFORNIA_BEACHES_API_URL } from '../config';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const checkURL = (url) => {
  return(url.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/) != null);
}

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
  }
});


export default function Beaches() {
  const [beachData, setBeachData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios.get(CALIFORNIA_BEACHES_API_URL).then((response) => { 
      if(response.status >= 200 && response.status < 300) {
        const results = response.data;
        let newBeachData = [];
        results.forEach((beach) => {
          let beachObject = {
            id: beach.ID,
            image: ((beach.Photo_1 && checkURL(beach.Photo_1)) ? beach.Photo_1 
                                  : (beach.Photo_2 && checkURL(beach.Photo_2) ? beach.Photo_2 
                                                   : (beach.Photo_3 && checkURL(beach.Photo_3) ? beach.Photo_3 
                                                                    : (beach.Photo_4 && checkURL(beach.Photo_4) ? beach.Photo_4 
                                                                      : null)))),
            name: beach.NameMobileWeb,
            lat: beach.LATITUDE,
            lng: beach.LONGITUDE,
            county: beach.COUNTY 
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
         <ThemeProvider theme={theme}>
            <Box  style={{ height: '100%', width: '100%', backgroundColor: 'rgb(68,68,68)', textAlign: 'center' }}>
              <input style={{ width: '70%', marginTop: '70px', padding: '10px' }} type="text" placeholder="Search For a Beach by name or county" 
                    onChange={ (event) => { setSearchTerm(event.target.value) }} />
              <Grid style={{ textAlign: 'center', padding: '40px 10px 10px 10px' }} container spacing={2}>
                { beachData.filter((beach) => {
                  if(searchTerm === "") {
                    return beach;
                  } else if (beach.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return beach;
                  } else if (beach.county.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return beach;
                  }
                }).map((beach) => { 
                  return (
                    <BeachCard key={beach.id} beach={beach} image={beach.image}/>
                  )  
                })}
              </Grid>
            </Box>
         </ThemeProvider>
       ) : (<CircularProgress style={{ marginTop: 100, marginLeft: 150 }} /> )}
    </Box>
  )
}