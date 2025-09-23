import React from "react";
import TableGeneri from "../components/tableGeneric"
 function Clientes(){
    const campos = ["Cliente", "Paquete", "Fecha", "Duración", "Estado", "Acciones"];
    const datos=[
    {
        Cliente:"Pepe", Paquete:"Paquete 1"
    }     
    ]

    return(
        <div>
            <TableGeneri columns={campos} data={datos} />

        </div>

    )
 };

 export default Clientes;