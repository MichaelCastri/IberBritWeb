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
import Contacto from "./pages/contacto";
import ScrollToTop from "./components/ScrollToTop";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <Router>
        <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/laboral" element={<Laboral />} />
        <Route path="/servicios/legal" element={<Legal />} />
        <Route path="/servicios/fiscal" element={<Fiscal />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
