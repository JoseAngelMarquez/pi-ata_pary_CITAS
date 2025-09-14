import React from "react";
import { MenuList, MenuItem, Paper } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/LayoutAdmin.module.css"
import NavBar from "../components/navBar"
function LayoutAdmin() {
  return (
    <div className={styles.parent}>
      <div className={styles.div2}>
      <NavBar />
      </div>
      <aside className={styles.div1}>
        <Paper className={styles.paper}>
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
      </aside>
      <div className={styles.div3}>
        <Outlet />
      </div>
    </div>

  );
}

export default LayoutAdmin;
