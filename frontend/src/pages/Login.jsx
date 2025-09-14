import React, { useState } from "react";
import { FormControl, TextField, Button } from '@mui/material';
import styles from '../styles/login.module.css';
import { login } from '../services/users';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // evita que se recargue la página
    try {
      const data = await login(correo, contrasena);

      // guardar sesión
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      // redirección según rol
      if (data.usuario.rol === "admin") {
        navigate("/admin");
      } else if (data.usuario.rol === "usuario") {
        navigate("/usuario");
      } else {
        setMensaje("Rol no encontrado");
      }
    } catch (error) {
      setMensaje("Error al iniciar sesión");
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <FormControl className={styles['login-form']} component="form" onSubmit={handleSubmit}>
        
        <TextField
          label="Correo"
          variant="outlined"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          fullWidth
          style={{ maxWidth: "250px" }}
        />

        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          fullWidth
          style={{ maxWidth: "250px" }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ maxWidth: "250px" }}
        >
          Iniciar Sesión
        </Button>

        {mensaje && <p style={{ color: "red" }}>{mensaje}</p>}
      </FormControl>
    </div>
  );
};

export default Login;
