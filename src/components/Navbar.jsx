import React, { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "./button";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
        } shadow-md`}
    >
      {/* Navbar interno */}
      <div className="flex w-full h-20 items-center justify-between px-4 md:px-6">

        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <a href="/">
            <img
              src="/images/Branding/logo (4).webp"
              alt="Iberbrit-Legal Logo"
              className="h-16 w-auto rounded-md"
            />
          </a>
        </div>

        {/* Menú centrado */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="/servicios" className="text-sm font-medium text-red-800 hover:underline">
            {t('navbar.servicios')}
          </a>
          <a href="/nosotros" className="text-sm font-medium text-red-800 hover:underline">
            {t('navbar.nosotros')}
          </a>
          <a href="/contacto" className="text-sm font-medium text-red-800 hover:underline">
            {t('navbar.contacto')}
          </a>
          <a href="/paquetes" className="text-sm font-medium text-red-800 hover:underline">
            {t('navbar.paquetes')}
          </a>
          <a href="/oficinas" className="text-sm font-medium text-red-800 hover:underline">
            {t('navbar.oficinas')}
          </a>
        </nav>

        {/* Botón "Llámanos" + Selector de idioma */}
        <div className="flex items-center gap-4">
        
        <a href="tel:+34 968 337 392" className="flex flex-col items-center text-white">
    <Phone className="mb-2 h-4 w-4" />
    Llámanos
  </a>

          <select
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="border border-gray-300 rounded-md text-gray-900 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-800"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>

      </div>
    </header>
  );
}
