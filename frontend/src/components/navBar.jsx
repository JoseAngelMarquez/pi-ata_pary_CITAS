import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: 2 }}>
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
