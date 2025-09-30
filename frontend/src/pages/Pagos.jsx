import React from "react";
import GenericTable from "../components/tableGeneric"
import Reservas from "./Reservas";
function Pagos() {

    const columnas = ["Reserva", "Monto", "Método de pago", "Fecha de pago", "Estado", "Acciones"];
    const datos = [{Reserva:"#1" 
     } ]


    return (
        <div>
            <GenericTable data={datos} columns={columnas} />
        </div>

    )

}


export default Pagos;