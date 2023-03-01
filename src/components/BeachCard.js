import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { theme, linkStyle, cardStyle, cardMediaStyle, textCenter, nameStyle } from '../config';

export default function BeachCard(props) {
  const { beach, image } = props;
  const { id, name } = beach;
  const finalImage = image ? image :  require('../assets/image/noimage.jpg');
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={4} lg={2}>
        <Link to={"/beach/" + id} style={linkStyle}>
          <Card sx={cardStyle}>
            <CardMedia sx={cardMediaStyle} image={ finalImage }></CardMedia>
            <CardContent sx={textCenter}>
              <Typography sx={nameStyle}>
                { name }
              </Typography>
            </CardContent>
          </Card>
        </Link>  
      </Grid>
    </ThemeProvider>  
  )
}