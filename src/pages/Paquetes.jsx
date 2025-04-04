// src/pages/Paquetes.jsx

import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // 👈 añadimos useNavigate

const kits = [
  {
    nombre: "Kit Autónomo",
    descripcion: "Para autónomos que buscan una solución completa para sus obligaciones fiscales y tributarias.",
    beneficios: [
      "Planificaciones tributarias",
      "Declaraciones fiscales: IVA, Censos, IAE, Retenciones, IRPF",
      "Declaraciones informativas anuales",
      "Presentaciones telemáticas",
      "Solicitud de certificados tributarios",
      "Atención de requerimientos",
      "Aplazamientos y fraccionamientos de deudas",
      "Libros-Registro Ley IVA",
    ],
  },
  {
    nombre: "Kit Fiscal Sociedades",
    descripcion: "Para sociedades mercantiles y patrimoniales que requieren planificación fiscal y contabilidad integral.",
    beneficios: [
      "Planificaciones tributarias y pre-cierres",
      "Declaraciones fiscales: IVA, Sociedades, Censos, IAE, Retenciones, Informativas Anuales, Pagos Fraccionados",
      "Impuesto de Sociedades",
      "Presentaciones telemáticas",
      "Contabilidad desde nuestro despacho",
      "Depósito de cuentas anuales",
      "Legalización de libros oficiales",
      "Consultas fiscales y contables",
    ],
  },
  {
    nombre: "Kit No Residentes",
    descripcion: "Para no residentes con obligaciones fiscales en España: IRNR, IBI/SUMA, representación y más.",
    beneficios: [
      "Estudio fiscal personalizado en España",
      "Pre-cálculo y presentación del IRNR",
      "Gestión del IBI / SUMA",
      "Representación fiscal ante la Agencia Tributaria",
      "Presentaciones telemáticas",
    ],
  },
  {
    nombre: "Kit Residentes",
    descripcion: "Para residentes con sociedades patrimoniales sin actividad fiscal.",
    beneficios: [
      "Declaraciones fiscales: Impuesto Sociedades (sin actividad)",
      "Presentaciones telemáticas",
      "Certificados tributarios",
      "Legalización de libros oficiales",
      "Presentaciones telemáticas",
    ],
  },
  {
    nombre: "Kit Sociedad Civil Fiscal",
    descripcion: "Servicio fiscal completo para sociedades civiles: contabilidad, presentación de impuestos y más.",
    beneficios: [
      "Planificaciones tributarias",
      "Declaraciones fiscales: IVA, Censos, IAE, Retenciones, IRPF",
      "Presentaciones telemáticas",
      "Certificados tributarios",
      "Atención de requerimientos",
    ],
  },
  {
    nombre: "Kit Laboral",
    descripcion: "Asesoría laboral para empresas: contratación, Seguridad Social, nóminas, inspecciones y más.",
    beneficios: [
      "Consultas verbales",
      "Altas y bajas en Seguridad Social",
      "Asesoramiento sobre prestaciones",
      "Confección de nóminas",
      "Presentaciones telemáticas",
      
    ],
  },
];


const Paquetes = () => {
  const location = useLocation();
  const navigate = useNavigate(); // 👈 Hook para navegar
  const query = new URLSearchParams(location.search);
  const kitDesdeResumen = query.get("kit");

  const refs = useRef({});
  const [expanded, setExpanded] = useState(kitDesdeResumen ? kitDesdeResumen : null);

  useEffect(() => {
    if (kitDesdeResumen && refs.current[kitDesdeResumen]) {
      refs.current[kitDesdeResumen].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [kitDesdeResumen]);

  const toggleExpand = (kit) => {
    setExpanded((prev) => (prev === kit ? null : kit));
  };

  const solicitarInformacion = (kit) => {
    const nombreKit = encodeURIComponent(kit.nombre);
    navigate(`/contacto?kit=${nombreKit}`);
  };

  return (
    <section className="w-full min-h-screen bg-white py-24 px-4 text-cafeOscuro">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Todos nuestros paquetes de asesoramiento
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit, idx) => {
            const isOpen = expanded === kit.nombre;
            const beneficiosAMostrar = isOpen ? kit.beneficios : kit.beneficios.slice(0, 4);

            return (
              <div
                key={idx}
                ref={(el) => (refs.current[kit.nombre] = el)}
                className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "bg-rojoIber2 text-gray-900 border-rojoIber2 shadow-xl scale-[1.02]"
                    : "bg-white text-gray-900 border-gray-200 hover:shadow-md"
                }`}
              >
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">{kit.nombre}</h2>
                  <p className="text-base">{kit.descripcion}</p>
                  <ul className="space-y-2 min-h-[120px] text-sm">
                    {beneficiosAMostrar.map((item, i) => (
                      <li key={i} className="before:content-['✓'] before:mr-2 before:text-rojoIber2">
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
                      className="text-sm "
                    >
                      {isOpen ? "Mostrar menos" : "Ver todos los beneficios"}
                    </button>
                  )}
                  <button
                    onClick={() => solicitarInformacion(kit)}
                    className={`w-full py-2 px-4 rounded-md font-semibold transition ${
                      isOpen
                        ? "bg-white text-rojoIber2 hover:bg-gray-100"
                        : "bg-rojoIber2 text-white hover:bg-rojoIber1"
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
