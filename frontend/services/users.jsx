import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (correo, contrasena) => {
  try {
    const response = await axios.post(`${API_URL}/usuarios/login`, {
        correo, 
        contrasena,
     });      
    
    return response.data;
    
  }catch (error) {
    console.error("Error en login:", error);

    throw error;
  }
};






