// src/pages/Home.jsx

import React from "react";
import { Helmet } from 'react-helmet-async'; // 👈 Agrega esta línea
import { useTranslation } from 'react-i18next'; // 👈 Agrega traducciones
import Hero from "../components/Hero";
import AreasServicios from "../components/AreasServicios";
import KitsResumen from "../components/KitsResumen";
import PorqueElegirnos from "../components/PorqueElegirnos";
import Estadisticas from "../components/Estadisticas";
import Testimonios from "../components/Testimonios";
import Ubicaciones from "../components/Ubicaciones";
import MarcasColaboradoras from "../components/MarcasColaboradoras";
// Aquí irán los nuevos imports

const Home = () => {
  const { t } = useTranslation(); // 👈 Inicializa traducciones

  return (
    <div className="home-page min-h-screen">
      <Helmet> {/* 👈 Añade Helmet aquí */}
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.description')} />
        <meta name="keywords" content={t('seo.home.keywords')} />
      </Helmet>

      <Hero />

      {/* Áreas y Servicios */}
      <section id="areas-servicios">
        <AreasServicios />
      </section>

      {/* Kits de Asesoramiento Legal */}
      <section id="kits">
        <KitsResumen />
      </section>

      {/* Por qué elegirnos */}
      <section id="porque-elegirnos">
        <PorqueElegirnos />
      </section>

      {/* Llamada a la acción */}
      <section id="cta">
        <Estadisticas />
      </section>

      {/* Reseñas / Casos */}
      <section id="casos-reales">
        <Testimonios />
      </section>

      {/* Ubicaciones */}
      <section id="ubicaciones">
        <Ubicaciones />
      </section>

      {/* Marcas colaborativas */}
      <section id="marcas">
        <MarcasColaboradoras />
      </section>
    </div>
  );
};

export default Home;