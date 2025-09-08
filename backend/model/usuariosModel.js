const pool = require('../config/db');
const bcrypt = require('bcrypt');

class Usuarios {
  static async crear({ nombre, correo, telefono, contrasena, rol }) {
    try {
      // Verificar si el correo ya existe
      const [usuarios] = await pool.query(
        'SELECT * FROM usuarios WHERE correo = ?',
        [correo]
      );
  
      if (usuarios.length > 0) {
        throw new Error('El correo ya existe'); // Lanzar error
      }
  
      // Encriptar contraseña
      const hashedPassword = await bcrypt.hash(contrasena, 10);
  
      // Insertar en la base de datos
      const [result] = await pool.query(
        'INSERT INTO usuarios (nombre, correo, telefono, contrasena, rol) VALUES (?, ?, ?, ?, ?)',
        [nombre, correo, telefono, hashedPassword, rol]
      );
  
      return { id: result.insertId, nombre, correo, rol };
    } catch (error) {
      throw error;
    }
  }

  static async login(correo, contrasena) {
    try {
      const [usuarios] = await pool.query(
        'SELECT * FROM usuarios WHERE correo = ?',
        [correo]
      );
      //
      if (usuarios.length === 0) {
        throw new Error('Usuario no encontrado');
      }
      const usuario = usuarios[0];
      const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
      if (!isMatch) {
        throw new Error('Contraseña incorrecta');
      }
      return { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo, rol: usuario.rol };


    } catch (error) {
      throw error;
    }

  }
  
  



}

module.exports = Usuarios;
