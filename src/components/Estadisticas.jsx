// src/components/Estadisticas.jsx

import React, { useEffect, useState, useRef } from "react";
import {
  Users,
  Clock,
  ClipboardList,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const datos = [
  { label: "Clientes Satisfechos", valor: 1900, icon: <Users /> },
  { label: "Años Brindando Servicio", valor: 18, icon: <Clock /> },
  { label: "Operaciones Firmadas", valor: 9300, icon: <ClipboardList /> },
  { label: "Países Asesorados", valor: 30, icon: <Globe /> },
];

const AnimatedNumber = ({ value, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));

    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [value, start]);

  return <span className="text-rojoIber2">{count.toLocaleString()}</span>;
};

const Estadisticas = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const imagePaths = [
    "/images/fotoscartagenas/Apoyo4.webp",
    "/images/fotoscartagenas/Apoyo5.webp",
    "/images/fotoscartagenas/Apoyo1.webp",
    "/images/fotoscartagenas/Apoyo2.webp",
    "/images/fotoscartagenas/Apoyo6.webp",
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-white to-gray-50 py-24 px-4 text-cafeOscuro"
      style={{ backgroundImage: `url(${imagePaths[currentIndex]})` }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl shadow-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Confianza construida con resultados reales
        </h2>
        <p className="text-white shadow-2xl mb-16 max-w-2xl mx-auto">
          Cada número representa una historia de éxito legal, una empresa que
          confió en nuestro despacho, o un residente que encontró tranquilidad
          fiscal. Estas cifras son nuestra mejor carta de presentación.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {datos.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-black mb-2">{item.icon}</div>
              <p className="text-black text-4xl font-bold mb-1">
                <AnimatedNumber value={item.valor} start={startAnimation} />
                {item.label.includes("Años") ? "+" : ""}
              </p>
              <p className="text-black text-sm text-center max-w-[10rem]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-lg text-white font-medium mb-4">
            ¿Quieres formar parte de estas cifras?
          </p>
          <button
            onClick={() => navigate("/contacto")}
            className="bg-rojoIber2 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rojoIber1 transition"
          >
            Solicita una reunión
          </button>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;