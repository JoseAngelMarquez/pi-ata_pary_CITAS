const express = require('express');
const cors = require('cors');

const session = require('express-session');
require('dotenv').config();

const app = express();

// Habilitar CORS correctamente
app.use(cors(
{
    origin: 'http://localhost:5173', // Origen del frontend
    credentials: true, // Permitir cookies y encabezados de autorización
}
));
app.use(session({
    secret: 'mi_clave_secreta', 

    
 }))
// Para recibir JSON
app.use(express.json());

// Puerto
const PORT = process.env.PORT || 3001;

app.use('/api/usuarios', require('./routes/usuariosRoutes'));
app.use('/api/paquetes', require('./routes/paquetesRoutes'));

// Levantar servidor
app.listen(PORT, () => {   
    console.log(`Server is running on port ${PORT}`);
});
