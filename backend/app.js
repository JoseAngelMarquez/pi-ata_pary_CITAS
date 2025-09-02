const express = require('express');
const cors = require('cors');

const session = require('express-session');
require('dotenv').config();

const app = express();

// Habilitar CORS correctamente
app.use(cors(
{
    origin: 'http://localhost:3000', // Cambia esto al origen de tu frontend
    credentials: true, // Permitir cookies y encabezados de autorización
}
));
app.use(session({
    secret: 'mi_clave_secreta', // ⚠️ Cambia esto por algo seguro

 }))
// Para recibir JSON
app.use(express.json());

// Puerto
const PORT = process.env.PORT || 3001;

app.use('/api/usuarios', require('./routes/usuariosRoutes'));
// Levantar servidor
app.listen(PORT, () => {   
    console.log(`Server is running on port ${PORT}`);
});
