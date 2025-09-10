const bcrypt = require('bcrypt');
const pool = require('../config/db');

async function insertarUsuario() {
  const nombre = 'pepe';
  const correo = 'joseangelmarquezespina060503@gmail.com';
  const telefono = '9514194106';
  const contrasena = '123';
  const rol = 'admin';

  try {
    // 🔐 Hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    // 🗄️ Insertar en la base de datos
    const [result] = await pool.query(
      `INSERT INTO usuarios (nombre, correo, telefono, contrasena, rol)
       VALUES (?, ?, ?, ?, ?)`,
      [nombre, correo, telefono, hashedPassword, rol]
    );

    console.log('✅ Usuario insertado con ID:', result.insertId);
  } catch (error) {
    console.error('❌ Error al insertar usuario:', error);
  }
}

// Llamar la función
insertarUsuario();
