const pool = require('../config/db');

class Paquetes{

    static async obtenerPaquete(){
        try{
            const [rows] = await pool.query('select * from paquetes')
            return rows;
        }catch{

        }
    }

  


    static async crearPaquete({nombre, descripcion, precio, duracion}){
        try {
            const [result] = await pool.query(
                'INSERT INTO paquetes (nombre, descripcion, precio, duracion_horas) VALUES (?, ?, ?, ?)',
                [nombre, descripcion, precio, duracion]
            );
            return { id: result.insertId, nombre, descripcion, precio, duracion };
        } catch (error) {
            throw error;
        }
    }



}
module.exports = Paquetes;