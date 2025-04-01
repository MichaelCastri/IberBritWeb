// src/components/PorqueElegirnos.jsx

import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const razones = [
  {
    titulo: "Éxito garantizado",
    descripcion:
      "Más del 98% de nuestros clientes cumplen sus objetivos fiscales y legales gracias a nuestra asesoría estratégica.",
  },
  {
    titulo: "Más de 15 años de experiencia",
    descripcion:
      "Hemos asesorado a autónomos, sociedades y familias en España con casos reales, complejos y exigentes.",
  },
  {
    titulo: "Acompañamiento personalizado",
    descripcion:
      "No eres un expediente más. Tu asesor está contigo, conoce tu negocio y habla tu idioma.",
  },
  {
    titulo: "Compromiso con los plazos",
    descripcion:
      "Cumplimos rigurosamente con las fechas de impuestos, trámites legales y obligaciones contables.",
  },
  {
    titulo: "Transparencia total",
    descripcion:
      "Informes claros, seguimiento permanente y tarifas sin sorpresas.",
  },
  {
    titulo: "Cobertura nacional e internacional",
    descripcion:
      "Atendemos clientes residentes y no residentes con obligaciones en territorio español.",
  },
];

const PorqueElegirnos = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-24 px-4 text-cafeOscuro">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-900">
          ¿Por qué elegir Iberbrit?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {razones.map((razon, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="text-rojoIber2 w-6 h-6 mt-1" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {razon.titulo}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {razon.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-lg font-medium mb-4">
            Tu tranquilidad es nuestra prioridad.
          </p>
          <button
            onClick={() => navigate("/contacto")}
            className="bg-rojoIber2 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rojoIber1 transition"
          >
            Solicita tu primera asesoría
          </button>
        </div>
      </div>
    </section>
  );
};

export default PorqueElegirnos;