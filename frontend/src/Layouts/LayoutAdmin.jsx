import React from "react";
import { MenuList, MenuItem, Paper } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import layoutStyles from "../styles/LayoutAdmin.module.css";
import appStyles from "../styles/App.module.css";
import NavBar from "../components/navBar"

function LayoutAdmin() {
  return (
    
    <div className={appStyles.parent}>
     <div className={appStyles.div2}>
      <NavBar />
     </div>
      <aside className={appStyles.div1}>
        
        <Paper className={layoutStyles.paper}>
        
          <MenuList>
            
          <h1>wda</h1>

            <MenuItem component={Link} to="/admin/Principal">
              Inicio
            </MenuItem>
            <MenuItem component={Link} to="/admin/Usuarios">
              pagina
            </MenuItem>

          </MenuList>
        </Paper>
      </aside>
      <div className={appStyles.div3}>
        <Outlet />
      </div>
    </div>

  );
}

export default LayoutAdmin;
