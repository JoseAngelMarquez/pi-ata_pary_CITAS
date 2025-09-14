import React from "react";
import { MenuList, MenuItem, Paper } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function LayoutAdmin() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
    <Paper style={{ width: 200, height: 650 }}>
      <MenuList>
        <MenuItem component={Link} to="/admin/Principal">
          Inicio
        </MenuItem>
        <MenuItem component={Link} to="/admin/Principal">
          pagina1
        </MenuItem>
        <MenuItem component={Link} to="/admin/Pagina">
          pagina
        </MenuItem>

      </MenuList>
      </Paper>

      <div style={{ flex: 1, padding: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Outlet />
      </div>
    </div>
    
  );
}

export default LayoutAdmin;
