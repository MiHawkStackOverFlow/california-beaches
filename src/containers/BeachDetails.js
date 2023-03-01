import axios from "axios";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import { toggleFavourite } from '../redux/actions';
import { ThemeProvider } from '@mui/material/styles';
import ImageListItem from '@mui/material/ImageListItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, CircularProgress, Typography, Grid, Button } from '@mui/material';
import { theme, loaderStyle, CALIFORNIA_BEACHES_API_URL, processBeachData, beachDetailsBoxStyle, detailsHeaderStyle, beachNameStyle, linkToMapStyle, imageListStyle } from '../config';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

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
        currentBeach = processBeachData(currentBeach); 
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
            <Box sx={beachDetailsBoxStyle}>                
                <Box sx={detailsHeaderStyle}>
                    <Button sx={{ marginTop: 1 }} onClick={() => { this.props.toggleFavourite(beach) }}>
                        <FavoriteIcon style={{ color: this.favouriteChecker(beach) ? "red" : "white", fontSize: 30 }} />
                    </Button>

                    <Typography sx={beachNameStyle} variant='h3'>
                      { name }
                    </Typography>

                    <Link to="/map" style={linkToMapStyle} state={{ lat: beach.lat, lng: beach.lng }}>
                      <Typography sx={{ fontFamily: 'fantasy' }} variant='h6'>
                        <span> View on Google Maps </span>
                      </Typography>
                    </Link>
                </Box> 
                
                <ImageList sx={imageListStyle} cols={1} rows={1}>
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
                        <Grid item md={2} sm={12} xs={12}>
                          <Typography sx={{ fontSize: 20, marginTop: 2 }}>
                            FEE:  <br/> { beach.FEE }
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
      return <CircularProgress style={loaderStyle} />
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