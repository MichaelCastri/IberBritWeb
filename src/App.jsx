import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"

import Home from "./pages/Home.jsx"
import "./index.css"

function App() {
  return (
    <Router>
      
        <Navbar /> {/* ← Este es ahora global */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Aquí puedes añadir más rutas como /servicios, /contacto, etc. */}
        </Routes>
      
    </Router>
  )
}

export default App
