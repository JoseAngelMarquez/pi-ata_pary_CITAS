import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function NavBar({message}) {
  return (
    <AppBar position="static"  sx={{ boxShadow: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Título */}
        <Typography variant="h6" component="div">
        <h2>{message}</h2>
        </Typography>        
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
