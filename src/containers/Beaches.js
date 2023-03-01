import axios from "axios";
import CheckBox from "../components/Checkbox";
import BeachCard from "../components/BeachCard";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { Box, CircularProgress, Grid } from "@mui/material";
import { theme, processBeachesData, beachesMainBoxStyle, inputSearchStyle, beachGridStyle, loaderStyle, searchBeach, filerBeaches, CALIFORNIA_BEACHES_API_URL } from '../config';

export default function Beaches() {
  const [beachData, setBeachData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const pageData = (filteredData.length > 0) ? filteredData : beachData;
  const handleFilters = (selectedFilters) => {
    let newFilteredData = filerBeaches(beachData, selectedFilters);
    setFilteredData(newFilteredData);
  }
  useEffect(() => {
    axios.get(CALIFORNIA_BEACHES_API_URL).then((response) => { 
      if(response.status >= 200 && response.status < 300) {
        const results = response.data;
        let newBeachData = processBeachesData(results);
        setBeachData(newBeachData);
      }
    });
  }, []);
  return (
    <Box>
       { pageData ? (
         <ThemeProvider theme={theme}>
            <Box style={beachesMainBoxStyle}>
              <input style={inputSearchStyle} type="text" placeholder="Search a Beach by name or county" onChange={(event) => { setSearchTerm(event.target.value)}} />
              <br />
              <Box>
                <CheckBox handleFilters={ filters => handleFilters(filters) }/>
              </Box>      
              <Grid style={beachGridStyle} container spacing={2}>
                { pageData.filter((beach) => {
                  return searchBeach(searchTerm, beach);
                }).map((beach) => { 
                  return (
                    <BeachCard key={beach.id} beach={beach} image={beach.image}/>
                  )  
                })}
              </Grid>
            </Box>
         </ThemeProvider>
       ) : (<CircularProgress style={loaderStyle} /> )}
    </Box>
  )
}