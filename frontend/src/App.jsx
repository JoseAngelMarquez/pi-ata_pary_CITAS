import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login"; // importa tu componente

function App() {
  return (
    <Router>
      <Routes>
        {/* Aquí defines la ruta que mostrará tu Login */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
