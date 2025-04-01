// src/pages/Paquetes.jsx

import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

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
      "Solicitud de certificados tributarios",
      "Atención de requerimientos",
      "Aplazamientos y fraccionamientos de deudas",
      "Libros-Registro Ley IVA",
    ],
  },
  {
    nombre: "Kit Fiscal Sociedades",
    descripcion:
      "Para sociedades mercantiles y patrimoniales que requieren planificación fiscal y contabilidad integral.",
    beneficios: [
      "Planificaciones tributarias y pre-cierres",
      "Declaraciones fiscales: IVA, Sociedades, Censos, IAE, Retenciones, Informativas Anuales, Pagos Fraccionados",
      "Impuesto de Sociedades",
      "Presentaciones telemáticas",
      "Solicitud de certificaciones tributarias",
      "Atención de requerimientos",
      "Aplazamientos y fraccionamientos de deudas",
      "Libros-Registro IVA",
      "Contabilidad desde nuestro despacho",
      "Legalización de libros oficiales",
      "Depósito de cuentas anuales",
      "Informes contables",
      "Implantación del plan contable",
      "Consultas fiscales y contables",
    ],
  },
  {
    nombre: "Kit No Residentes",
    descripcion:
      "Para no residentes con obligaciones fiscales en España: IRNR, IBI/SUMA, representación y más.",
    beneficios: [
      "Estudio fiscal personalizado en España",
      "Pre-cálculo y presentación del IRNR",
      "Gestión del IBI / SUMA",
      "Representación fiscal ante la Agencia Tributaria",
      "Asesoramiento permanente",
    ],
  },
  {
    nombre: "Kit Residentes",
    descripcion:
      "Para residentes con sociedades patrimoniales sin actividad fiscal.",
    beneficios: [
      "Declaraciones fiscales: Impuesto Sociedades (sin actividad)",
      "Presentaciones telemáticas",
      "Certificados tributarios",
      "Legalización de libros oficiales",
      "Depósito de cuentas anuales",
      "Consultas fiscales y contables",
    ],
  },
  {
    nombre: "Kit Sociedad Civil Fiscal",
    descripcion:
      "Servicio fiscal completo para sociedades civiles: contabilidad, presentación de impuestos y más.",
    beneficios: [
      "Planificaciones tributarias",
      "Declaraciones fiscales: IVA, Censos, IAE, Retenciones, IRPF",
      "Presentaciones telemáticas",
      "Certificados tributarios",
      "Atención de requerimientos",
      "Aplazamientos y fraccionamientos",
      "Libros-Registro Ley IVA",
    ],
  },
  {
    nombre: "Kit Laboral",
    descripcion:
      "Asesoría laboral para empresas: contratación, Seguridad Social, nóminas, inspecciones y más.",
    beneficios: [
      "Consultas verbales",
      "Altas y bajas en Seguridad Social",
      "Asesoramiento sobre prestaciones",
      "Confección de nóminas",
      "Cotizaciones y boletines",
      "Modelos fiscales: 110/111, 190",
      "Representación ante inspección de trabajo",
      "Gestión de subvenciones",
      "Certificados de retención",
      "Redacción de expedientes disciplinarios",
    ],
  },
];

const Paquetes = () => {
  const location = useLocation();
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
    alert(`Has seleccionado el paquete: ${kit.nombre}`);
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
            const beneficiosAMostrar = isOpen
              ? kit.beneficios
              : kit.beneficios.slice(0, 4);
            return (
              <div
                key={idx}
                ref={(el) => (refs.current[kit.nombre] = el)}
                className="bg-gray-50 rounded-2xl shadow-md p-8 flex flex-col justify-between transition hover:-translate-y-1"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {kit.nombre}
                </h2>
                <p className="text-gray-700 mb-4">{kit.descripcion}</p>
                <ul className="text-left text-gray-600 space-y-2 mb-6 min-h-[120px]">
                  {beneficiosAMostrar.map((item, i) => (
                    <li
                      key={i}
                      className="before:content-['✓'] before:mr-2 before:text-rojoIber2"
                    >
                      {item}
                    </li>
                  ))}
                  {!isOpen && kit.beneficios.length > 4 && (
                    <li className="text-sm text-gray-500 italic mt-2">
                      ...ver más
                    </li>
                  )}
                </ul>

                <div className="flex flex-col gap-3">
                  {kit.beneficios.length > 4 && (
                    <button
                      onClick={() => toggleExpand(kit.nombre)}
                      className="text-sm text-rojoIber2 underline"
                    >
                      {isOpen ? "Mostrar menos" : "Ver todos los beneficios"}
                    </button>
                  )}
                  <button
                    onClick={() => solicitarInformacion(kit)}
                    className="w-full bg-rojoIber2 text-white font-medium py-2 px-4 rounded-md hover:bg-rojoIber1 transition"
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
