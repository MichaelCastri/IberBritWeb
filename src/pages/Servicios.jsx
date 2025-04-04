// src/pages/Servicios.jsx

import React from "react";
import { Link } from "react-router-dom";

const servicios = [
  {
    titulo: "Asesoría Fiscal y Contable",
    descripcion:
      "Optimiza tu carga tributaria con nuestros economistas expertos. Nos encargamos de tus impuestos, balances, libros contables y más.",
    url: "/servicios/fiscal",
  },
  {
    titulo: "Asesoría Laboral",
    descripcion:
      "Gestionamos contratos, nóminas, despidos y relaciones laborales de forma eficaz, segura y legal.",
    url: "/servicios/laboral",
  },
  {
    titulo: "Asesoría Legal Mercantil",
    descripcion:
      "Soluciones jurídicas para sociedades, contratos, constitución de empresas y cumplimiento normativo.",
    url: "/servicios/legal",
  },
  {
    titulo: "Asesoría Integral",
    descripcion:
      "Servicio completo para empresas y autónomos: fiscal, contable, laboral y legal en un solo despacho.",
    url: "/contacto",
  },
  {
    titulo: "Kit Fiscal Autónomos",
    descripcion:
      "Tributación simplificada, libros IVA, IRPF, atención de requerimientos y más. Todo en manos de nuestros economistas.",
    url: "/paquetes",
  },
  {
    titulo: "Kit Fiscal Sociedades",
    descripcion:
      "Desde contabilidad interna hasta el Impuesto de Sociedades. Ideal para patrimoniales y PYMEs.",
    url: "/paquetes",
  },
  {
    titulo: "Kit Legal",
    descripcion:
      "Incluye defensa jurídica, revisión de contratos, constitución de sociedades y asistencia legal integral.",
    url: "/paquetes",
  },
  {
    titulo: "Kit No Residentes",
    descripcion:
      "Representación fiscal, IRNR, SUMA, IBI y atención personalizada para clientes internacionales.",
    url: "/paquetes",
  },
  {
    titulo: "Kit Residentes",
    descripcion:
      "Asistencia fiscal, legal y contable para residentes en España con obligaciones societarias.",
    url: "/paquetes",
  },
  {
    titulo: "Kit Sociedad Civil Fiscal",
    descripcion:
      "Asistencia civil para residentes en España con obligaciones fiscales.",
    url: "/paquetes",
  },
];

const Servicios = () => {
  return (
    <main className="w-full bg-white text-cafeOscuro">
      <section className="w-full py-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Soluciones de Asesoría Iberbrit</h1>
        <p className="text-xl text-gray-700 mb-6">
          En Iberbrit ofrecemos soluciones legales y fiscales a medida para empresas, autónomos y no residentes. Nuestros
          <strong> economistas </strong> y asesores garantizan <strong> tranquilidad frente a la Agencia Tributaria </strong>
          con una gestión precisa, cercana y experta.
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Especialistas en <strong>asesoría fiscal y contable</strong>, <strong>asesoría laboral</strong>, <strong>asesoría legal mercantil</strong> y
          <strong> paquetes fiscales personalizados </strong> como el <strong>Kit Autónomo</strong> o el <strong>Kit No Residentes</strong>.
        </p>
      </section>

      <section className="w-full px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <Link
              to={servicio.url}
              key={index}
              className="bg-gray-50 hover:bg-gray-100 p-6 rounded-xl shadow-md text-left transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {servicio.titulo}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {servicio.descripcion}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Servicios;

// ✅ Meta SEO sugerida para usar en index.html o con react-helmet
// <meta name="description" content="Descubre las soluciones de asesoría fiscal, laboral, legal y contable de Iberbrit. Expertos economistas y paquetes personalizados para empresas, autónomos y no residentes." />
