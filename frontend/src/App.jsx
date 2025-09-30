import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Paquetes from "./pages/Paquetes"; 
import LayoutAdmin from "./Layouts/LayoutAdmin";
import Usuarios from "./pages/Usuarios";
import Reservas from "./pages/Reservas";
function App() {
  return ( 
    <Router>
      <Routes>
        {/* Ruta pública */}
        <Route path="/" element={<Login />} />
        {/* Rutas privadas con layout */}
        <Route path="/admin" element={<LayoutAdmin />}>
          {/* Ruta index: /Admin */}
          <Route index element={<Paquetes />} />
          {/* Ruta anidada: /Admin/Principal */}
          <Route path="Paquetes" element={<Paquetes />} />
          <Route path="Usuarios" element={<Usuarios />} />
          <Route path="Reservas" element={<Reservas />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
