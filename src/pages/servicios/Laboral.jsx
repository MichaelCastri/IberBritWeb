import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, FileCheck, ShieldCheck } from "lucide-react";

const Laboral = () => {
  return (
    <main className="w-full bg-white text-cafeOscuro">

      {/* HERO CON FONDO */}
      <section
        className="w-full py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo1.avif')" }}
      >
        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-16 rounded-2xl shadow-lg max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Asesoría Laboral Integral
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Protege tu empresa y asegura el cumplimiento legal con expertos en contratación, nóminas, Seguridad Social e inspecciones.
          </p>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">¿Qué incluye nuestra asesoría laboral?</h2>
          <p className="text-gray-600">Servicios diseñados para garantizar tu tranquilidad y la de tu equipo.</p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 list-none">
          {[
            "Asesoramiento en contratación y modalidades de contrato.",
            "Confección de nóminas, seguros sociales y finiquitos.",
            "Altas, bajas y modificaciones en la Seguridad Social.",
            "Representación ante inspecciones de trabajo.",
            "Gestión de despidos y expedientes disciplinarios.",
            "Consultoría en prevención de riesgos laborales.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 text-gray-700">
              <Briefcase className="text-rojoIber2 mt-1 w-5 h-5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Beneficios de trabajar con Iberbrit</h2>
            <p className="text-gray-600">Asegura estabilidad laboral, evita riesgos y protege tus intereses empresariales.</p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-gray-700">
                Cumple de forma rigurosa con toda la legislación laboral vigente y evita sanciones o conflictos innecesarios.
              </p>
              <p className="text-gray-700">
                Nuestro equipo actúa de forma preventiva y asesora en la optimización de tus recursos humanos.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700">
                Defendemos tus intereses ante la Inspección de Trabajo y garantizamos procedimientos laborales seguros.
              </p>
              <p className="text-gray-700">
                En Iberbrit ofrecemos compromiso, confidencialidad y soluciones a medida para tu empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">¿Cómo trabajamos contigo?</h2>
        </div>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
          {[
            "Análisis de la situación laboral actual de tu empresa.",
            "Detección de riesgos y oportunidades de mejora.",
            "Diseño e implementación de estrategias laborales seguras.",
            "Actualización continua y seguimiento normativo.",
            "Representación y defensa ante organismos laborales.",
          ].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* DIFERENCIA */}
      <section
        className="w-full py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo1.avif')" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          
          <div className="bg-white p-8 rounded-2xl shadow-md text-gray-700 text-lg space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            ¿Por qué elegir Iberbrit para tu asesoría laboral?
          </h2>
            <p>
              No solo resolvemos trámites. Construimos una estrategia laboral robusta, optimizando costes y asegurando el cumplimiento de tus obligaciones.
            </p>
            <p>
              Nuestra asesoría es proactiva, cercana y completamente adaptada a las necesidades de tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          Preguntas frecuentes sobre asesoría laboral
        </h2>
        <div className="grid gap-8">
          {[
            {
              q: "¿Qué documentación necesito para contratar empleados?",
              a: "Documento de identidad del trabajador, número de afiliación a la Seguridad Social y contrato firmado.",
            },
            {
              q: "¿Qué incluye una inspección de trabajo?",
              a: "Revisión de contratos, cumplimiento de cotizaciones, prevención de riesgos laborales y condiciones de los trabajadores.",
            },
            {
              q: "¿Qué hago si recibo una sanción laboral?",
              a: "Nuestro equipo te asiste en la defensa, asesoramiento legal y tramitación de recursos ante la Inspección de Trabajo.",
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
          ¿Quieres garantizar la tranquilidad laboral de tu empresa?
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

export default Laboral;
