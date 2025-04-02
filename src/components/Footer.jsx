// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cafeOscuro text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Iberbrit</h3>
          <p className="text-sm text-gray-300">
            Despacho de asesores fiscales, laborales y legales, economistas con presencia en
            toda España.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Inicio</Link></li>
            <li><Link to="/paquetes" className="hover:underline">Kits</Link></li>
            <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
            <li><Link to="/legal" className="hover:underline">Aviso Legal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Email: info@iberbrit.com</li>
            <li>Tel: +34 900 000 000</li>
            <li>Madrid · Cartagena</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Redes Sociales</h4>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-rojoIber2">LinkedIn</a></li>
            <li><a href="#" className="hover:text-rojoIber2">Instagram</a></li>
            <li><a href="#" className="hover:text-rojoIber2">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} Iberbrit Asesores. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;