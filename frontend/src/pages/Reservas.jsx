import React from "react";
import TableGeneri from "../components/tableGeneric"
 function Reservas(){
    const campos = ["Cliente", "Paquete", "Fecha", "Duración", "Estado", "Acciones"];
    const datos=[
    {
        Cliente:"Pepe", Paquete:"Paquete 1"
    }     
    ]

    return(
        <div>
            <TableGeneri data={datos} columns={campos} />

        </div>

    )
 };

 export default Reservas;