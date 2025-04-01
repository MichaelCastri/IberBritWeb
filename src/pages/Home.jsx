// src/pages/Home.jsx

import React from "react";
import Hero from "../components/Hero";
import AreasServicios from "../components/AreasServicios";
import KitsResumen from "../components/KitsResumen";
import PorqueElegirnos from "../components/PorqueElegirnos";
import Estadisticas from "../components/Estadisticas";
// Aquí irán los nuevos imports

const Home = () => {
  return (
    <div className="home-page">
      <Hero />

      {/* Áreas y Servicios */}
      <section id="areas-servicios">
        {<AreasServicios/>}
      </section>

      {/* Kits de Asesoramiento Legal */}
      <section id="kits">
        {<KitsResumen/>}
      </section>

      {/* Por qué elegirnos */}
      <section id="porque-elegirnos">
        {<PorqueElegirnos/>}
      </section>

      {/* Llamada a la acción */}
      <section id="cta">
        {<Estadisticas/>}
      </section>

      {/* Reseñas / Casos */}
      <section id="casos-reales">
        {/* Componente CasosClientes */}
      </section>

      {/* Ubicaciones */}
      <section id="ubicaciones">
        {/* Componente Ubicaciones */}
      </section>

      {/* Marcas colaborativas */}
      <section id="marcas">
        {/* Componente MarcasColaborativas */}
      </section>
    </div>
  );
};

export default Home;
