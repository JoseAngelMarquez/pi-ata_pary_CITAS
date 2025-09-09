import React from "react";
import { FormControl, TextField, Button } from '@mui/material';
import styles from '../styles/login.module.css';

function Login() {
    return (
        <div className={styles.container}>
            <FormControl className={styles['login-form']}>

                <TextField 
                    label="Usuario" 
                    variant="outlined" 
                    fullWidth 
                    style={{ maxWidth: "250px", width: "100%" }} 
                />

                <TextField 
                    label="Contraseña" 
                    variant="outlined" 
                    fullWidth 
                    style={{ maxWidth: "250px", width: "100%" }} 
                />

                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    style={{ maxWidth: "250px", width: "100%" }}
                >
                    Iniciar Sesión
                </Button>

            </FormControl>
        </div>
    )
}

export default Login;
