import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function AppNavigator() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" color="primary">
        <Toolbar variant="dense">
          <Link to="/" style={{ color: '#FFF' }}>
            <Typography variant="h6">Beaches</Typography>
          </Link>
          <Link to="/favourites" style={{ color: '#FFF' }}>
            <Typography variant="h6" style={{ marginLeft: 15 }}>Favourites</Typography>
          </Link>
          <Link to="/map" style={{ color: '#FFF' }}>
            <Typography variant="h6" style={{ marginLeft: 15 }}>Map</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>  
  )
}