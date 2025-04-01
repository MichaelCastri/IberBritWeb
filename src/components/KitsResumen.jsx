// src/components/KitsResumen.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const kits = [
  {
    nombre: "Kit Autónomo",
    descripcion:
      "Para autónomos que buscan una solución completa para sus obligaciones fiscales y tributarias.",
    beneficios: [
      "Planificaciones tributarias",
      "Declaraciones fiscales: IVA, Censos, IAE, Retenciones, IRPF",
      "Declaraciones informativas anuales",
      "Presentaciones telemáticas",
      "Certificados tributarios",
      "Atención de requerimientos",
      "Aplazamientos y fraccionamientos",
      "Libros-Registro Ley IVA",
    ],
  },
  {
    nombre: "Kit Fiscal Sociedades",
    descripcion:
      "Para sociedades mercantiles y patrimoniales que requieren planificación fiscal y contabilidad integral.",
    beneficios: [
      "Planificaciones y pre-cierres",
      "Declaraciones fiscales completas",
      "Contabilidad mensual",
      "Depósito de cuentas anuales",
      "Implantación del plan contable",
      "Consultas fiscales y contables",
    ],
  },
  {
    nombre: "Kit No Residentes",
    descripcion:
      "Para no residentes con obligaciones fiscales en España: IRNR, IBI/SUMA, representación y más.",
    beneficios: [
      "Estudio fiscal personalizado",
      "Pre-cálculo y presentación IRNR",
      "Gestión del IBI / SUMA",
      "Representación ante Hacienda",
      "Consultoría continua",
    ],
  },
  
];

const KitsResumen = () => {
  const navigate = useNavigate();

  const solicitarInformacion = (kit) => {
    const query = new URLSearchParams({ kit: kit.nombre }).toString();
    navigate(`/paquetes?${query}`);
  };

  return (
    <section className="w-full bg-gray-100 py-24 px-4 text-cafeOscuro" id="kits">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-900">
          Nuestros Kits de Asesoramiento
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {kits.map((kit, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between transition hover:-translate-y-1 ${
                kit.nombre === "Kit Autónomo" ? "border-2 border-rojoIber2" : ""
              }`}
            >
              {/* Badge para el más popular */}
              {kit.nombre === "Kit Autónomo" && (
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  El más popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {kit.nombre}
                </h3>
                <p className="text-gray-700 mb-4">{kit.descripcion}</p>
                <ul className="text-left space-y-2 text-gray-600 mb-6">
                  {kit.beneficios.slice(0, 4).map((item, i) => (
                    <li
                      key={i}
                      className="before:content-['✓'] before:mr-2 before:text-rojoIber2"
                    >
                      {item}
                    </li>
                  ))}
                  {kit.beneficios.length > 4 && (
                    <li className="text-sm text-gray-500 italic mt-2">
                      ...ver más en la sección de paquetes
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <button
                  onClick={() => solicitarInformacion(kit)}
                  className="w-full bg-rojoIber2 text-white font-medium py-2 px-4 rounded-md hover:bg-rojoIber1 transition"
                >
                  Solicitar información
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA a página de paquetes */}
        <Link
          to="/paquetes"
          className="inline-block bg-cafeOscuro text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
        >
          Ver todos los paquetes de asesoramiento
        </Link>
      </div>
    </section>
  );
};

export default KitsResumen;
