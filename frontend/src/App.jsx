import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Paquetes from "./pages/Paquetes"; 
import LayoutAdmin from "./Layouts/LayoutAdmin";
import Usuarios from "./pages/Usuarios";
import Reservas from "./pages/Reservas";
import Pagos from "./pages/Pagos";
function App() {
  return ( 
    <Router>
      <Routes>
        {/* Ruta pública */}
        <Route path="/" element={<Login />} />
        {/* Rutas privadas con layout */}
        <Route path="/admin" element={<LayoutAdmin />}>
          {/* Ruta index: /Admin */}
           <Route index element={<Navigate to="Paquetes" replace />} />
          {/* Ruta anidada: /Admin/Principal */}
          <Route path="Paquetes" element={<Paquetes />} />
          <Route path="Usuarios" element={<Usuarios />} />
          <Route path="Reservas" element={<Reservas />} />
          <Route path="Pagos"    element={<Pagos />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
