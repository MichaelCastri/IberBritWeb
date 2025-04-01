// src/components/AreasServicios.jsx

import React from "react";
//import "./AreasServicios.css";

const AreasServicios = () => {
  const servicios = [
    {
      icono: "💼",
      titulo: "Asesoría Laboral",
      descripcion:
        "Gestión integral de relaciones laborales, contratos, nóminas, despidos y prevención de riesgos.",
    },
    {
      icono: "📜",
      titulo: "Asesoría Legal Mercantil",
      descripcion:
        "Constitución de sociedades, contratos mercantiles, cumplimiento normativo y protección jurídica.",
    },
    {
      icono: "📊",
      titulo: "Asesoría Fiscal y Contable",
      descripcion:
        "Planificación fiscal, contabilidad empresarial, impuestos, balances y auditoría.",
    },
  ];

  return (
    <section className="areas-servicios">
      <h2>Nuestras Áreas de Servicio</h2>
      <div className="servicios-grid">
        {servicios.map((area, idx) => (
          <div className="servicio-card" key={idx}>
            <div className="icono">{area.icono}</div>
            <h3>{area.titulo}</h3>
            <p>{area.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AreasServicios;
