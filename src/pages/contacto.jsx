// src/pages/Contacto.jsx

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Phone, MessageSquareText } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha"; // 👈 Importante
import { Helmet } from 'react-helmet-async'; // 👈 Importa Helmet
import { useTranslation } from 'react-i18next'; // 👈 Traducciones

const Contacto = () => {
  const { t } = useTranslation(); // 👈 Inicializa traducción
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const kitSeleccionado = query.get("kit");
  const citaSolicitada = query.get("cita");

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (kitSeleccionado) {
      setFormData((prevData) => ({
        ...prevData,
        mensaje: `Estoy interesado en el ${kitSeleccionado}`,
      }));
    } else if (citaSolicitada) {
      setFormData((prevData) => ({
        ...prevData,
        mensaje: `Quisiera que me agendaran una cita en ${citaSolicitada}`,
      }));
    }
  }, [kitSeleccionado, citaSolicitada]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    if (!recaptchaValue) {
      setError("Por favor, verifica que no eres un robot.");
      return;
    }

    try {
      const response = await fetch("https://iberbrit.com/enviar-formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaValue: recaptchaValue,
        }),
      });

      if (response.ok) {
        setSuccess("¡Tu consulta ha sido enviada correctamente!");
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
        setRecaptchaValue("");
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setError("Hubo un problema al enviar tu consulta. Por favor, inténtalo más tarde.");
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-cover bg-center py-24 px-4"
      style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo3.avif')" }}>

      <Helmet> {/* 👈 Añade Helmet aquí */}
        <title>{t('seo.contacto.title')}</title>
        <meta name="description" content={t('seo.contacto.description')} />
        <meta name="keywords" content={t('seo.contacto.keywords')} />
      </Helmet>

      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-2">
          {t('contacto.titulo')}
        </h2>
        <p className="text-center text-gray-700 mb-10">
          {t('contacto.descripcion')}
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo *
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono *
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje *
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              required
              className="w-full rounded-lg border border-gray-300 px-4 text-black py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
              placeholder="Escribe tu mensaje..."
            ></textarea>
          </div>

          {/* ✅ Aquí el reCAPTCHA con la nueva SiteKey */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LeG9RcrAAAAALF7lcUoGXG58XImBRthw7qOo4Jz"
              onChange={(value) => setRecaptchaValue(value)}
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-red-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-800 transition"
          >
            {t('contacto.botonEnviar')}
          </button>
        </form>

        <div className="mt-10 flex justify-center gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> info@iberbrit.com
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> +34 968 337 392
          </div>
          <div className="flex items-center gap-2">
            <MessageSquareText className="w-4 h-4" /> WhatsApp
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
