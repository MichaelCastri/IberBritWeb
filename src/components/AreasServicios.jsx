// src/components/AreasServicios.jsx

import React from "react";
import { Link } from "react-router-dom";

const AreasServicios = () => {
  const servicios = [
    {
      slug: "laboral",
      imagen: "public/images/Branding/apoyo1.webp",
      titulo: "Asesoría Laboral",
      descripcion:
        "Gestión integral de relaciones laborales, contratos, nóminas, despidos y prevención de riesgos.",
    },
    {
      slug: "legal",
      imagen: "public/images/Branding/apoyo2.webp",
      titulo: "Asesoría Legal Mercantil",
      descripcion:
        "Constitución de sociedades, contratos mercantiles, cumplimiento normativo y protección jurídica.",
    },
    {
      slug: "fiscal",
      imagen: "public/images/Branding/apoyo3.webp",
      titulo: "Asesoría Fiscal y Contable",
      descripcion:
        "Planificación fiscal, contabilidad empresarial, impuestos, balances y auditoría.",
    },
  ];

  return (
    <section id="areas-servicios" className="w-full bg-white py-24 text-cafeOscuro">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-opensans text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
          Áreas y Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {servicios.map((area, idx) => (
            <Link
              to={`/servicios/${area.slug}`}
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 block text-left"
            >
              <img
                src={area.imagen}
                alt={area.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-gray-900 font-semibold mb-2">
                  {area.titulo}
                </h3>
                <p className="text-gray-700">{area.descripcion}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasServicios;
