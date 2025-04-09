import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Paquetes = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const kitDesdeResumen = query.get("kit");

  const refs = useRef({});
  const [expanded, setExpanded] = useState(kitDesdeResumen ? kitDesdeResumen : null);

  useEffect(() => {
    if (kitDesdeResumen && refs.current[kitDesdeResumen]) {
      refs.current[kitDesdeResumen].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [kitDesdeResumen]);

  const toggleExpand = (kitNombre) => {
    setExpanded((prev) => (prev === kitNombre ? null : kitNombre));
  };

  const solicitarInformacion = (kitNombre) => {
    const nombreKit = encodeURIComponent(kitNombre);
    navigate(`/contacto?kit=${nombreKit}`);
  };

  // Traemos los kits traducidos
  const kits = t("paquetes.kits", { returnObjects: true });

  return (
    <section className="w-full min-h-screen bg-white py-24 px-4 text-cafeOscuro">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          {t("paquetes.titulo")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(kits).map(([key, kit], idx) => {
            const isOpen = expanded === kit.nombre;
            const beneficiosAMostrar = Array.isArray(kit.beneficios)
              ? (isOpen ? kit.beneficios : kit.beneficios.slice(0, 4))
              : [];

            return (
              <div
                key={idx}
                ref={(el) => (refs.current[kit.nombre] = el)}
                className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "bg-gray-100 text-gray-900 border-red-800 shadow-xl scale-[1.02]"
                    : "bg-white text-gray-900 border-gray-200 hover:shadow-md"
                }`}
              >
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">{kit.nombre}</h2>
                  <p className="text-base">{kit.descripcion}</p>
                  <ul className="space-y-2 min-h-[120px] text-sm">
                    {beneficiosAMostrar.map((item, i) => (
                      <li key={i} className="before:content-['✓'] before:mr-2 before:text-red-800">
                        {item}
                      </li>
                    ))}
                    {!isOpen && kit.beneficios.length > 4 && (
                      <li className="text-white italic">...ver más</li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  {kit.beneficios.length > 4 && (
                    <button
                      onClick={() => toggleExpand(kit.nombre)}
                      className="border-red-800 bg-red-800 hover:bg-red-700 text-white text-sm"
                    >
                      {isOpen ? "Mostrar menos" : "Ver todos los beneficios"}
                    </button>
                  )}
                  <button
                    onClick={() => solicitarInformacion(kit.nombre)}
                    className={`w-full py-2 px-4 rounded-md font-semibold transition ${
                      isOpen
                        ? "border-red-800 bg-red-800 hover:bg-red-700 text-white"
                        : "border-red-800 bg-red-800 hover:bg-red-700 text-white"
                    }`}
                  >
                    Solicitar información
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Paquetes;
