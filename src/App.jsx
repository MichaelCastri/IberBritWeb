// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// Páginas individuales
import Laboral from "./pages/servicios/Laboral";
import Legal from "./pages/servicios/Legal";
import Fiscal from "./pages/servicios/Fiscal";
import Paquetes from "./pages/Paquetes";
import Footer from "./components/Footer";

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
      <Footer/>
    </Router>
  );
}

export default App;
