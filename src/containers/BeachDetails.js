import React, { Component } from 'react';
import axios from "axios";
import { CALIFORNIA_BEACHES_API_URL } from '../config';
import { Box, CircularProgress, Typography, Grid, Button } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { connect } from 'react-redux';
import { toggleFavourite } from '../redux/actions';

import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

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

class BeachDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beach: null
    }
  }
  
  componentDidMount() {
    let { id } = this.props.params;
    axios.get(CALIFORNIA_BEACHES_API_URL + '/id/' + id).then((response) => {
      if(response.status >= 200 && response.status < 300) {
        let currentBeach = response.data[0];
        let images = [];
        // TODO: refactor this later
        if(currentBeach.Photo_1 && checkURL(currentBeach.Photo_1)) { images.push(currentBeach.Photo_1); }
        if(currentBeach.Photo_2 && checkURL(currentBeach.Photo_2)) { images.push(currentBeach.Photo_2); } 
        if(currentBeach.Photo_3 && checkURL(currentBeach.Photo_3)) { images.push(currentBeach.Photo_3); } 
        if(currentBeach.Photo_4 && checkURL(currentBeach.Photo_4)) { images.push(currentBeach.Photo_4); }
        const noImage = require('../assets/image/noimage.jpg');
        if(images.length === 0) { images.push(noImage) }
        currentBeach.images = images;
        currentBeach.id = currentBeach.ID;
        currentBeach.name = currentBeach.NameMobileWeb;
        console.log('ccd', currentBeach);  
        this.setState({ beach: currentBeach })
      }
    })
  }

  favouriteChecker(beach) {
    let found = false;
    this.props.favourites?.map((b) => {
      if(b.id === beach.id) { 
        found = true;
      }
      return b;
    });
    return found;
  }

  render() {
    let { beach } = this.state;
    if (beach) {
      const name = beach.name;
      // TODO: Try an image slider later https://github.com/alielkhateeb/mui-image-slider
      return (
        <ThemeProvider theme={theme}>
          <Box>
            <Box sx={{ height: '140vh', backgroundColor: 'black',  color: 'white', marginTop: 10, textAlign: 'center', borderRadius: 5,
                      paddingTop: 3 }}>
                
                <Typography sx={{ textTransform: 'upperCase', fontFamily: 'fantasy' }} variant='h3'>
                  { name }
                </Typography>
                
                <ImageList sx={{ 
                   width: {
                    xxs: 300,
                    xs: 300,
                    sm: 300,
                    md: 1000,
                    lg: 1000,
                    xl: 1000
                  },
                  height: 500, margin: 'auto' }} cols={1} rows={1}>
                  {beach.images.map((item, index) => (
                    <ImageListItem key={index}>
                      <img
                        src={`${item}`}
                        alt={name}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>

                <hr />

                <Box sx={{ margin: 'auto' }}>
                    <Grid container>
                        <Grid item md={1} sm={12} xs={12}>
                          <Button sx={{ height: 1, width: 100, marginTop: 1 }} onClick={() => { this.props.toggleFavourite(beach) }}>
                            <FavoriteIcon style={{ color: this.favouriteChecker(beach) ? "red" : "white", fontSize: 30 }} />
                          </Button>
                        </Grid>
                        <Grid item md={2} sm={12} xs={12}>
                          <Typography sx={{ fontSize: 20, marginTop: 2 }}>
                            Name: <br/> { name }
                          </Typography>
                        </Grid>
                        <Grid item md={2} sm={12} xs={12}>
                          <Typography sx={{ fontSize: 20, marginTop: 2 }}>
                            District: <br/> { beach.DISTRICT }
                          </Typography>
                        </Grid>
                        <Grid item md={2} sm={12} xs={12}>
                          <Typography sx={{ fontSize: 20, marginTop: 2 }}>
                            County:  <br/> { beach.COUNTY }
                          </Typography>
                        </Grid>
                        <Grid item md={2} sm={12} xs={12}>
                          <Typography sx={{ fontSize: 20, marginTop: 2 }}>
                            PHONE: <br/> { beach.PHONE_NMBR ? beach.PHONE_NMBR : 'Not available' }
                          </Typography>
                        </Grid>
                        <Grid item md={2} sm={12} xs={12}>
                          <Typography sx={{ fontSize: 20, marginTop: 2 }}>
                            AREA:  <br/> { beach.GEOGR_AREA }
                          </Typography>
                        </Grid> 
                    </Grid>
                </Box>

              <hr />  
               
            </Box>
          </Box>
        </ThemeProvider>
      )
    } else {
      return <CircularProgress style={{ marginTop: 100, marginLeft: 150 }} />
    }
  }
}


const mapStateToProps = (state) => ({
  favourites: state.favourites
});

const mapDispatchToProps = (dispatch) => ({ 
  toggleFavourite: (beach) => dispatch(toggleFavourite(beach))
});

export default withParams((connect(mapStateToProps, mapDispatchToProps))(BeachDetails));