import React from "react";
import { MenuList, MenuItem, Paper } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import layoutStyles from "../styles/LayoutAdmin.module.css";
import appStyles from "../styles/App.module.css";
import NavBar from "../components/navBar"

function LayoutAdmin() {
const location = useLocation();

const navConfig = {
  "/admin/Principal": "Bienvenido al panel de usuarios",
  "/admin/Usuarios": "Gestión de paquetes",
};

// Obtenemos mensaje según ruta
const message = navConfig[location.pathname] || null;


  return (
    
    <div className={appStyles.parent}>
     <div className={appStyles.div2}>
     {message && <NavBar message={message} />}

     </div>
      <aside className={appStyles.div1}>
        
        <Paper className={layoutStyles.paper}>
        
          <MenuList>
            
          <h1>Admin</h1>

            <MenuItem component={Link} to="/admin/Principal">
              Usuarios
            </MenuItem>
            <MenuItem component={Link} to="/admin/Usuarios">
              Paquetes
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
