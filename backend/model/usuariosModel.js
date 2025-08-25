const pool = require('../config/db');
const bcrypt = require('bcrypt');

class Usuarios {
  static async crear({ usuario, contrasena }) {
    try {
      // Verificar si el usuario ya existe
      const [usuarios] = await pool.query(
        'SELECT * FROM administrador WHERE usuario = ?',
        [usuario]
      );

      if (usuarios.length > 0) {
        throw new Error('El nombre de usuario ya existe'); // Lanzar error
      }

      // Encriptar contraseña
      const hashedPassword = await bcrypt.hash(contrasena, 10);

      // Insertar en la base de datos
      const [result] = await pool.query(
        'INSERT INTO administrador (usuario, contrasena) VALUES (?, ?)',
        [usuario, hashedPassword]
      );

      return { id: result.insertId, usuario };
    } catch (error) {
      throw error;
    }
  }

  static async login({ usuario, contrasena }) {
    try {
      // Buscar usuario en la base de datos
      const [usuarios] = await pool.query(
        'SELECT * FROM administrador WHERE usuario = ?',
        [usuario]
      );

      if (usuarios.length === 0) {
        throw new Error('Usuario no encontrado');
      }

      const usuarioEncontrado = usuarios[0];

      // Verificar la contraseña
      const passwordMatch = await bcrypt.compare(contrasena, usuarioEncontrado.contrasena);

      if (!passwordMatch) {
        throw new Error('Contraseña incorrecta');
      }

      // Retornar solo lo necesario, sin la contraseña
      return { id: usuarioEncontrado.id, usuario: usuarioEncontrado.usuario };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Usuarios;
