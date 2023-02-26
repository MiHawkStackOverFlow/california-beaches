import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

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

export default function BeachCard(props) {
  const { beach, image } = props;
  const { id, name } = beach;
  const finalImage = image ? image :  require('../assets/image/noimage.jpg');
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={4} lg={2}>
        <Link to={"/beach/" + id} style={{ textDecoration: 'none' }}>
          <Card sx={{ paddingTop: 5, cursor: 'pointer', backgroundColor: 'black', color: 'white', ":hover": { backgroundColor: "rgb(90, 90, 90)" }, }}>
            <CardMedia sx={{
              margin: 'auto',
              height: 150,
              width: {
                xxs: 300,
                xs: 300,
                sm: 300,
                md: 300,
                lg: 150,
                xl: 150
              }
            }} image={ finalImage }></CardMedia>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography sx={{  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', ":hover": { overflow: 'visible', whiteSpace: 'pre-wrap' } }}>
                { name }
              </Typography>
            </CardContent>
          </Card>
        </Link>  
      </Grid>
    </ThemeProvider>  
  )
}