import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Principal from "./pages/Principal"; 
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
          <Route index element={<Principal />} />
          {/* Ruta anidada: /Admin/Principal */}
          <Route path="Principal" element={<Principal />} />
          <Route path="Usuarios" element={<Usuarios />} />
          <Route path="Reservas" element={<Reservas />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
