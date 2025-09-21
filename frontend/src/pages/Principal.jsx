import React from "react";
import TablePackage from "../components/tableGeneric"
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Principal(){
    const columns = ["Nombre", "Descripción", "Precio", "Duración", "Acciones"];
    const data =[
        {Nombre: "Paquete 1", Descripción:"Incluye 6 mesas redondas", Precio:"500", Duración: "5 goras" , Acciones:
            (
                <>
                  <IconButton color="primary" onClick={() => alert("Editar Juan")}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={()=> alert("Eliminar")}>
                  <DeleteIcon/>

                  </IconButton>
                </>
            )
        },
    ];
return(
<div>
    <TablePackage columns={columns} data={data}/>
</div>
)

}

export default Principal;