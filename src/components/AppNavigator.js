import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function AppNavigator() {
  return (
    <AppBar position="fixed" variant="h6" color="primary" enableColorOnDark>
      <Toolbar variant="dense">
        <Link component="button" to="/">
          <Typography>Beaches</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}