import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function AppNavigator() {
  return (
    <AppBar position="fixed" color="primary" enableColorOnDark>
      <Toolbar variant="dense">
        <Link to="/">
          <Typography variant="h6">Beaches</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}