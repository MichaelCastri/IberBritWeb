// src/pages/Nosotros.jsx

import React from "react";
import Equipo from "../components/Equipo";

const Nosotros = () => {
  return (
    <div className="w-full bg-white text-cafeOscuro">
      {/* Sección: Quiénes Somos */}
      <section className="w-full py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">¿Quiénes somos?</h1>
        <p className="text-xl text-gray-700 mb-6">
          Un despacho con alma, donde la cercanía y el rigor legal se combinan para lograr resultados extraordinarios.
        </p>
        <p className="text-gray-600 text-md">
          Iberbrit nace con la vocación de ser más que un despacho: somos el aliado estratégico de quienes necesitan
          asesoramiento humano, eficiente y personalizado. Nuestro equipo está formado por expertos en derecho, fiscalidad
          y relaciones laborales comprometidos con tu éxito.
        </p>
      </section>

      {/* Sección: Origen y Valores */}
      <section className="w-full py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestro origen</h2>
            <p className="text-gray-700">
              Desde 2002, Iberbrit ha acompañado a cientos de emprendedores, particulares y empresas en sus procesos
              fiscales y legales, tanto en España como en el extranjero. Comenzamos como un pequeño despacho en Madrid
              y hoy tenemos presencia en varias ciudades.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestros valores</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ética profesional</li>
              <li>Trato humano y cercano</li>
              <li>Compromiso con el resultado</li>
              <li>Transparencia en todo el proceso</li>
              <li>Atención a residentes y no residentes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sección: Nuestro equipo */}
      <Equipo />

      {/* Sección: ¿Quieres trabajar con nosotros? */}
      <section className="w-full bg-rojoIber2 text-black py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">¿Quieres trabajar con nosotros?</h2>
          <p className="text-lg mb-6">
          ¿Te gustaría formar parte de nuestro equipo?
          En Iberbrit seguimos creciendo y apostamos por el talento. Si te apasiona el ámbito jurídico, fiscal y económico, y compartes nuestros valores, estaremos encantados de conocerte.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Enviar solicitud
          </a>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
