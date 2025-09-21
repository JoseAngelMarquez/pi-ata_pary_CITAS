import React from "react";
import GenericTable from "../components/tableGeneric";
import styles from "../styles/tableGeneric.module.css";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function Usuarios() {
  const columns = ["Nombre", "Email", "Rol", "Acciones"];
  const data = [
    {
      Nombre: "Juan Pérez", Email: "juan@example.com", Rol: "Admin", Acciones: 
      (
      <>
        <IconButton color="primary" onClick={() => alert("Editar Juan")}>
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={() => alert("Eliminar Juan")}>
          <DeleteIcon />
        </IconButton>
      </>
      )
    },
  ];

  return (
    <div>
      <div className={styles.table_container}>
        <GenericTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default Usuarios;
