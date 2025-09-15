import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function NavBar() {
  return (
    <AppBar position="static"  sx={{ boxShadow: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Título */}
        <Typography variant="h6" component="div">
          Usuarios
        </Typography>        
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
