import React from "react";
import { MenuList, MenuItem, Paper } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import layoutStyles from "../styles/LayoutAdmin.module.css";
import appStyles from "../styles/App.module.css";
import NavBar from "../components/navBar"

function LayoutAdmin() {
const location = useLocation();

const navConfig = {
  "/admin/Paquetes": "Gestión de paquetes",
  "/admin/Usuarios": "Bienvenido al panel de usuarios",
  "/admin/Reservas": "Bienvenido al apartado de reservas",
  "/admin/Pagos": "Bienvenido al apartado de pagos",
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

            <MenuItem component={Link} to="/admin/Usuarios">
              Usuarios
            </MenuItem>
            <MenuItem component={Link} to="/admin/Paquetes">
              Paquetes
            </MenuItem>
            <MenuItem component={Link} to= "/admin/Reservas">
            Reservas
            </MenuItem>
            <MenuItem component={Link} to= "/admin/Pagos">
            Pagos
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
