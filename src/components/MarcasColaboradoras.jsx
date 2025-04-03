// src/components/MarcasColaboradoras.jsx

import React from "react";

const marcas = [
  "/images/marcas/Auren.webp",
  "/images/marcas/Economistas.webp",
  "/images/marcas/El Enemigo.webp",
  "/images/marcas/MadFlats.webp",
  "/images/marcas/SiMadrid.webp",
  "/images/marcas/Spanish Conection.webp",
];

const MarcasColaboradoras = () => {
  return (
    <section className="w-full bg-gray-900 py-5 px-4">
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
  Marcas que confían en Iber
  <span style={{ color: "#991b1b" }}>brit</span>
</h2>

        <div className="overflow-hidden relative">
          <div className="flex gap-12 animate-marquee w-max">
            {[...marcas, ...marcas].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Marca ${index + 1}`}
                className="h-16 sm:h-20 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarcasColaboradoras;

/* Agrega esto en tu index.css */
/*
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  animation: marquee 40s linear infinite;
}
*/
