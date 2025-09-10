import React from "react";
import { MenuList, MenuItem, Paper } from "@mui/material";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <Paper style={{ width: 200, height: 650 }}>
      <MenuList>
        <MenuItem component={Link} to="/Principal">
          Principal
        </MenuItem>
        <MenuItem component={Link} to="/about">
          Acerca de
        </MenuItem>
        <MenuItem component={Link} to="/contact">
          Contacto
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

export default Layout;
