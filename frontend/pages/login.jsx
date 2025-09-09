import React from "react";
import { FormControl } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
function Login() {
    return (
        <div>
            <FormControl
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    width: "300px",
                    padding: "20px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}
            >

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