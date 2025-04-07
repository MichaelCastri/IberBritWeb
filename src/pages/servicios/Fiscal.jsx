import React from "react";
import { Link } from "react-router-dom";
import { FileText, ShieldCheck, ClipboardList } from "lucide-react";

const Fiscal = () => {
  return (
    <main className="w-full bg-white text-cafeOscuro">

      {/* HERO CON FONDO */}
      <section
        className="w-full py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo4.avif')" }}
      >
        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-16 rounded-2xl shadow-lg max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Asesoría Fiscal y Contable en España
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Optimiza tu fiscalidad con el respaldo de economistas expertos. Gestionamos tus impuestos, contabilidad y cumplimiento legal de forma precisa y estratégica.
          </p>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">¿Qué incluye nuestra asesoría fiscal?</h2>
          <p className="text-gray-600">Todo lo que necesitas para estar en regla y optimizar tu tributación.</p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 list-none">
          {[
            "Planificación fiscal estratégica para autónomos y sociedades.",
            "Elaboración y presentación de impuestos: IVA, IRPF, Impuesto de Sociedades.",
            "Contabilidad adaptada a la normativa vigente.",
            "Asesoramiento en inspecciones fiscales.",
            "Legalización de libros contables oficiales.",
            "Representación ante organismos tributarios.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 text-gray-700">
              <FileText className="text-rojoIber2 mt-1 w-5 h-5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Beneficios de confiar en Iberbrit</h2>
            <p className="text-gray-600">Más que gestores, somos tus socios estratégicos fiscales.</p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-gray-700">
                Ahorra tiempo, evita sanciones y aprovecha todos los beneficios fiscales disponibles para tu empresa o actividad.
              </p>
              <p className="text-gray-700">
                Nuestro equipo trabaja contigo de forma proactiva, manteniéndote actualizado frente a cambios normativos.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700">
                Servicio 100% personalizado, informes periódicos y asesoramiento ilimitado para resolver cualquier consulta fiscal.
              </p>
              <p className="text-gray-700">
                Tranquilidad jurídica para que tú solo te centres en hacer crecer tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">¿Cómo trabajamos?</h2>
        </div>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
          {[
            "Primera consulta gratuita y análisis de tu situación.",
            "Propuesta personalizada de planificación fiscal.",
            "Preparación y presentación de tus obligaciones periódicas.",
            "Seguimiento continuo y alertas de cambios fiscales relevantes.",
            "Defensa legal en inspecciones o requerimientos tributarios.",
          ].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* DIFERENCIA */}
      <section
        className="w-full py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo4.avif')" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          
          <div className="bg-white p-8 rounded-2xl shadow-md text-gray-700 text-lg space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            ¿Por qué no somos una gestoría tradicional?
          </h2>
            <p>
              Las gestorías tradicionales se limitan a tramitar tus impuestos. En Iberbrit, diseñamos estrategias fiscales inteligentes que protegen tu negocio y potencian tu crecimiento.
            </p>
            <p>
              Trabajamos contigo, no para ti. Nos involucramos en cada etapa para que siempre estés un paso adelante de la Agencia Tributaria.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          Preguntas frecuentes
        </h2>
        <div className="grid gap-8">
          {[
            {
              q: "¿Qué impuestos debe presentar un autónomo en España?",
              a: "Principalmente IVA, IRPF, modelos trimestrales y anuales como el 130, 303, 390 o 347, entre otros.",
            },
            {
              q: "¿Iberbrit gestiona también sociedades mercantiles?",
              a: "Sí, asesoramos y llevamos la contabilidad y fiscalidad completa de PYMEs, sociedades patrimoniales y startups.",
            },
            {
              q: "¿Qué hago si recibo un requerimiento o inspección de Hacienda?",
              a: "No te preocupes, Iberbrit te representa en todo el proceso, defendiendo tus intereses y resolviendo cualquier incidencia.",
            },
          ].map((faq, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-gray-800">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          ¿Listo para transformar tu fiscalidad?
        </h2>
        <Link
          to="/contacto"
          className="inline-block bg-rojoIber2 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rojoIber1 transition"
        >
          Solicita una consulta gratuita
        </Link>
      </section>

    </main>
  );
};

export default Fiscal;
