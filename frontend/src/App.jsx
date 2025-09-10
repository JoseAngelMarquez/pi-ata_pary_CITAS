import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Principal from "../pages/principal";
import LayoutAdmin from "../Layouts/LayoutAdmin";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta pública */}
        <Route path="/" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
