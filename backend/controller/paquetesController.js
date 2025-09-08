const Paquetes = require("../model/paquetesModel");

exports.Paquetes = async (req, res) => {
    try {
        const { nombre, descripcion, precio, duracion } = req.body;

        // Validación de datos
        if (!nombre || !descripcion || !precio || !duracion) {
            return res.status(400).json({ mensaje: 'Faltan datos' });
        }

        // Llamar al modelo para crear paquete
        const nuevoPaquete = await Paquetes.crearPaquete({ nombre, descripcion, precio, duracion });

        res.status(201).json({
            mensaje: 'Paquete creado exitosamente',
            paquete: nuevoPaquete
        });

    } catch (error) {
        console.error('Error al crear paquete:', error);
        res.status(500).json({ mensaje: 'Error   al crear paquete' });
    }
}