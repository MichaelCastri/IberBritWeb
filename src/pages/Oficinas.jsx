// src/pages/Oficinas.jsx

import React from "react";
import { Link } from "react-router-dom";

const oficinas = [
  {
    ciudad: "Madrid",
    direccion: "Plaza del Callao, 1, Planta 5 - Oficina 6, Centro, 28013 Madrid",
    imagenes: [
      "/images/fotoscartagenas/fotoscartagena (17).webp",
      "/images/fotoscartagenas/fotoscartagena (15).webp",
      "/images/fotoscartagenas/fotoscartagena (12).webp",
      "/images/fotoscartagenas/fotoscartagena (13).webp",
    ],
    descripcion: `Nuestra oficina en Madrid está ubicada en el corazón financiero y empresarial de España. Desde aquí, asesoramos a autónomos, empresas y particulares, ofreciendo un servicio fiscal, legal y contable integral.`,
  },
  {
    ciudad: "Cartagena",
    direccion: "Iberbrit Legal, Calle Dr. Luis Calandre, 30, Bajo - Oficina, 30205 Cartagena, Murcia",
    imagenes: [
      "/images/fotoscartagenas/fotoscartagena (21).webp",
      "/images/fotoscartagenas/fotoscartagena (22).webp",
      "/images/fotoscartagenas/fotoscartagena (18).webp",
      "/images/fotoscartagenas/fotoscartagena (19).webp",
    ],
    descripcion: `En nuestra sede de Cartagena combinamos cercanía, atención personalizada y excelencia profesional. Ubicados en una zona estratégica de la ciudad, ofrecemos asesoría fiscal, contable, laboral y legal adaptada a empresas locales e internacionales.`,
  },
  {
    ciudad: "La Manga",
    direccion: "Iberbrit Legal, 30380 La Manga del Mar Menor. Cartagena, Murcia.",
    imagenes: [
      "/images/fotoscartagenas/fotoscartagena (24).webp",
      "/images/fotoscartagenas/fotoscartagena (25).webp",
      "/images/fotoscartagenas/fotoscartagena (26).webp",
      "/images/fotoscartagenas/fotoscartagena (29).webp",
    ],
    descripcion: `Nuestra oficina en La Manga ofrece un entorno privilegiado para la atención de clientes nacionales e internacionales.`,
  },
];

const Oficinas = () => {
  return (
    <main className="w-full bg-white min-h-screen py-24 px-6 text-cafeOscuro">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Nuestras Oficinas en España
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Descubre nuestras sedes en Madrid, Cartagena y La Manga. Te esperamos en ubicaciones estratégicas para ofrecerte asesoría fiscal, contable, legal y laboral de calidad.
        </p>
      </section>

      {oficinas.map((oficina, idx) => (
        <section
          key={idx}
          className="max-w-6xl mx-auto mb-20 text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{`Oficina en ${oficina.ciudad}`}</h2>
          <p className="text-gray-600 mb-6">{oficina.direccion}</p>

          {/* Galería de imágenes específica para cada oficina */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {oficina.imagenes.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Oficina Iberbrit en ${oficina.ciudad} ${index + 1}`}
                className="rounded-lg object-cover w-full h-56 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>

          {/* Descripción SEO */}
          <div className="max-w-4xl mx-auto text-gray-700 text-base leading-relaxed mb-8">
            {oficina.descripcion}
          </div>

          {/* Botón para solicitar cita */}
          <Link
            to={`/contacto?cita=${encodeURIComponent(oficina.ciudad)}`}
            className="inline-block bg-rojoIber2 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rojoIber1 transition"
          >
            Solicitar cita en {oficina.ciudad}
          </Link>
        </section>
      ))}
    </main>
  );
};

export default Oficinas;
