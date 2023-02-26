import React, { Component } from 'react';
import axios from "axios";
import { CALIFORNIA_BEACHES_API_URL } from '../config';
import { Box, CircularProgress, Typography } from '@mui/material';

export default class BeachDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beach: null
    }
  }
  
  componentDidMount() {
    const { match } = this.props;
    const { id } = match?.params;
    axios.get(CALIFORNIA_BEACHES_API_URL + '/id/' + id).then((response) => {
      if(response.status >= 200 && response.status < 300) {
        console.log(response.data); 
        this.setState({ beach: response.data[0] })
      }
    })
  }

  render() {
    const { beach } = this.state;
    if (beach) {
      const name = beach.NameMobileWeb;
      return (
        <Box>
          <Box sx={{ height: '84vh', backgroundColor: 'black',  color: 'white', marginTop: 10, textAlign: 'center', borderRadius: 5,
                     paddingTop: 3 }}>
             <Typography sx={{ textTransform: 'upperCase', fontFamily: 'fantasy' }} variant='h1'>
               { name }
             </Typography>
          </Box>
        </Box>
      )
    } else {
      return <CircularProgress />
    }
  }
}