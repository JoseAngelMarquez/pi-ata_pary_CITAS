import React from "react";
import { FormControl } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import styles from '../styles/login.module.css';
function Login() {
    return (
        <div>
            <FormControl className={styles['login-form']} >

                <TextField label="Usuario" variant="outlined" fullWidth style={{ marginBottom: "16px" }} />
                <TextField label="Contraseña" variant="outlined" fullWidth style={{ marginBottom: "16px" }} />

                <Button variant="contained" color="primary" fullWidth>
                    Iniciar Sesión
                </Button>

            </FormControl>
        </div>
    )

}

export default Login;