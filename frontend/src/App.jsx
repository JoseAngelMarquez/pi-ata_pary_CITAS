import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Principal from "./pages/Principal";
import LayoutAdmin from "./Layouts/LayoutAdmin";
import Pagina from "./pages/Pagina";
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
          <Route path="Pagina" element={<Pagina />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
