import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Servicios = () => {
  const { t } = useTranslation();
  const servicios = t("servicios.lista", { returnObjects: true });

  return (
    <main className="w-full bg-white text-cafeOscuro">

      {/* HERO CON FONDO DINÁMICO */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo1.avif')" }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-12 rounded-xl max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            {t("servicios.titulo")}
          </h1>
          <p className="text-lg text-gray-700 text-center">
            {t("servicios.descripcion1")}
          </p>
          <p className="text-lg text-gray-700 text-center mt-4">
            {t("servicios.descripcion2")}
          </p>
        </div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="w-full px-6 pb-24 pt-16 max-w-6xl mx-auto">
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
