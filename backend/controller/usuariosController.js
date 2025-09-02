const Usuarios = require('../model/usuariosModel');
exports.crearUsuario = async (req, res) => {
  console.log('req.body:', req.body); // Para ver qué llega

  try {
    const { nombre, correo, telefono, contrasena, rol } = req.body;

    // Validación de datos
    if (!nombre || !correo || !contrasena) {
      return res.status(400).json({ mensaje: 'Faltan datos' });
    }

    // Llamar al modelo para crear usuario
    const nuevoUsuario = await Usuarios.crear({ nombre, correo, telefono, contrasena, rol });

    res.status(201).json({
      mensaje: 'Usuario creado exitosamente',
      usuario: nuevoUsuario
    });

  } catch (error) {
    // Manejo de errores específicos
    if (error.message === 'El correo ya existe') {
      return res.status(400).json({ mensaje: error.message });
    }
    console.error('Error al crear usuario:', error);
    res.status(500).json({ mensaje: 'Error al crear usuario' });
  }
};


