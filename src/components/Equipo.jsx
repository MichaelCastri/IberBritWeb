// src/components/Equipo.jsx

import React from "react";

const equipo = [
  {
    nombre: "María González",
    cargo: "Socia Fundadora",
    especialidad: "Asesoría Fiscal y Contable",
    imagen: "/images/equipo/maria.webp",
  },
  {
    nombre: "Juan Pérez",
    cargo: "Abogado Senior",
    especialidad: "Derecho Mercantil y Laboral",
    imagen: "/images/equipo/juan.webp",
  },
  {
    nombre: "Laura Sánchez",
    cargo: "Consultora Jurídica",
    especialidad: "Clientes No Residentes",
    imagen: "/images/equipo/laura.webp",
  },
];

const Equipo = () => {
  return (
    <section className="w-full py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {equipo.map((persona, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg group h-72"
            >
              <img
                src={persona.imagen}
                alt={`Foto de ${persona.nombre}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4 flex flex-col justify-end">
                <h3 className="text-white text-xl font-semibold">{persona.nombre}</h3>
                <p className="text-white text-sm">{persona.cargo} — {persona.especialidad}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipo;
