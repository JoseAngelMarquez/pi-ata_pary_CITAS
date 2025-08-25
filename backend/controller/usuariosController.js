const Usuarios = require('../model/usuariosModel');

exports.crearUsuario = async (req, res) => {
  console.log('req.body:', req.body); // <- ver qué llega

  try {
    const { usuario, contrasena } = req.body;

    // Validación de datos
    if (!usuario || !contrasena) {
      return res.status(400).json({ mensaje: 'Faltan datos' });
    }

    // Llamar al modelo para crear usuario
    const nuevoUsuario = await Usuarios.crear({ usuario, contrasena });

    res.status(201).json({
      mensaje: 'Usuario creado exitosamente',
      usuario: nuevoUsuario
    });

  } catch (error) {
    // Manejo de errores específicos
    if (error.message === 'El nombre de usuario ya existe') {
      return res.status(400).json({ mensaje: error.message });
    }
    console.error('Error al crear usuario:', error);
    res.status(500).json({ mensaje: 'Error al crear usuario' });
  }
};

exports.loginUsuario = async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;

    // Validación de datos
    if (!usuario || !contrasena) {
      return res.status(400).json({ mensaje: 'Faltan datos' });
    }

    // Llamar al modelo para iniciar sesión
    const usuarioEncontrado = await Usuarios.login({ usuario, contrasena });

    res.status(200).json({
      mensaje: 'Inicio de sesión exitoso',
      usuario: usuarioEncontrado
    });

  } catch (error) {
    // Manejo de errores específicos
    if (error.message === 'Usuario no encontrado' || error.message === 'Contraseña incorrecta') {
      return res.status(400).json({ mensaje: error.message });
    }
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
};
