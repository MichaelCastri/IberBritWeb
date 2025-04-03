// src/components/Contacto.jsx

import React from "react";
import { Mail, Phone, MessageSquareText } from "lucide-react";

const Contacto = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-100 to-white py-24 px-4">
      <div className="absolute inset-0">
        <img
          src="/images/Branding/bg-contacto.webp"
          alt="Fondo contacto"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-2">
          ¿Empezamos hoy mismo a resolver tu situación legal?
        </h2>
        <p className="text-center text-gray-700 mb-10">
          Contáctanos y te responderemos en menos de 24 horas.
        </p>

        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rojoIber2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rojoIber2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono (opcional)
            </label>
            <input
              type="tel"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rojoIber2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              rows="4"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rojoIber2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-rojoIber2 text-white font-semibold py-3 px-6 rounded-lg hover:bg-rojoIber1 transition"
          >
            Enviar consulta
          </button>
        </form>

        <div className="mt-10 flex justify-center gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> info@iberbrit.com
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> +34 900 000 000
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
