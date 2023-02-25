import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

export default function BeachCard(props) {
  const { beach, image } = props;
  const { name } = beach;
  const finalImage = image ? image :  require('../assets/image/noimage.jpg');
  return (
    <Grid item xs={12} sm={2}>
      <Card sx={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', ":hover": { backgroundColor: "rgb(90, 90, 90)" } }}>
        <CardMedia sx={{
          margin: 'auto',
          width: 150,
          height: 150
        }} image={finalImage }></CardMedia>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography>
            { name }
          </Typography>
        </CardContent>
      </Card>  
    </Grid>
  )
}