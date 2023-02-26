import { Box, Grid } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeachCard from '../components/BeachCard';

class Favourites extends Component {
  render() {
    const { favourites } = this.props;
    return (
      <Box>
        <Grid container spacing={2} sx={{ height: '100vh', backgroundColor: 'rgb(68,68,68)', paddingTop: 10, textAlign: 'center' }}>
          {favourites.map((beach) => {
            return (
              <BeachCard beach={beach} key={beach.id} image={beach.images[0]}/>
            )
          })}
        </Grid>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  favourites: state.favourites
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);