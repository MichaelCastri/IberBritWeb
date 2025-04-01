// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// Páginas individuales
import Laboral from "./pages/servicios/Laboral";
import Legal from "./pages/servicios/Laboral";
import Fiscal from "./pages/servicios/Fiscal";
import Paquetes from "./pages/Paquetes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/laboral" element={<Laboral />} />
        <Route path="/servicios/legal" element={<Legal />} />
        <Route path="/servicios/fiscal" element={<Fiscal />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/contacto" element={<Paquetes />} />
      </Routes>
    </Router>
  );
}

export default App;
