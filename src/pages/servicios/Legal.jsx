import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, FileText, Briefcase } from "lucide-react";

const Legal = () => {
  return (
    <main className="w-full bg-white text-cafeOscuro">

      {/* HERO CON FONDO */}
      <section
        className="w-full py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo2.avif')" }}
      >
        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-16 rounded-2xl shadow-lg max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Asesoría Legal Mercantil en España
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Protege tu empresa y operaciones con el respaldo jurídico de Iberbrit. Constitución de sociedades, contratos, compliance y mucho más.
          </p>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">¿Qué cubre nuestra asesoría legal mercantil?</h2>
          <p className="text-gray-600">Protegemos cada paso de tu empresa con rigor y estrategia legal.</p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 list-none">
          {[
            "Constitución de sociedades y modificaciones estatutarias.",
            "Redacción y revisión de contratos mercantiles y civiles.",
            "Asesoría en fusiones, adquisiciones y disoluciones empresariales.",
            "Compliance legal y adaptación normativa (LOPD, PBC).",
            "Asistencia en procedimientos judiciales mercantiles.",
            "Consultoría legal continua para empresas nacionales e internacionales.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 text-gray-700">
              <ShieldCheck className="text-rojoIber2 mt-1 w-5 h-5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Beneficios de elegir Iberbrit</h2>
            <p className="text-gray-600">Confianza jurídica para operar en España con tranquilidad y respaldo profesional.</p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-gray-700">
                Seguridad jurídica total en tus operaciones comerciales y corporativas.
              </p>
              <p className="text-gray-700">
                Anticipación de riesgos legales mediante una estrategia preventiva adaptada a tu sector.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700">
                Reducción de litigios gracias a contratos blindados y adaptados a la normativa vigente.
              </p>
              <p className="text-gray-700">
                Representación y defensa eficaz en cualquier procedimiento mercantil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTRO MÉTODO */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">¿Cómo te ayudamos desde el primer día?</h2>
        </div>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
          {[
            "Analizamos tu situación jurídica y objetivos de negocio.",
            "Diseñamos una estrategia legal personalizada.",
            "Blindamos tus contratos y documentación empresarial.",
            "Acompañamiento continuo en cumplimiento normativo.",
            "Defensa jurídica en litigios mercantiles si es necesario.",
          ].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* DIFERENCIA */}
      <section
        className="w-full py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo2.avif')" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          
          <div className="bg-white p-8 rounded-2xl shadow-md text-gray-700 text-lg space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            ¿Qué nos diferencia de otros despachos?
          </h2>
            <p>
              En Iberbrit no solo resolvemos problemas legales. Creamos soluciones que impulsan tu crecimiento empresarial, con un asesoramiento estratégico, práctico y personalizado.
            </p>
            <p>
              Apostamos por la excelencia, la proactividad y el dominio total del derecho mercantil español e internacional.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          Preguntas frecuentes sobre asesoría legal
        </h2>
        <div className="grid gap-8">
          {[
            {
              q: "¿Qué documentos necesito para constituir una sociedad?",
              a: "DNI/NIE de los socios, estatutos sociales, certificación negativa del nombre y otros documentos básicos adaptados al tipo societario.",
            },
            {
              q: "¿Qué hacer si un contrato tiene cláusulas abusivas?",
              a: "Nuestro equipo revisará el contrato y negociará su modificación o anulación para proteger tus intereses.",
            },
            {
              q: "¿Ofrecen defensa legal si tengo un litigio mercantil?",
              a: "Sí. Disponemos de abogados especializados en derecho mercantil que te representarán en cualquier procedimiento judicial.",
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
          ¿Necesitas blindar jurídicamente tu empresa?
        </h2>
        <Link
          to="/contacto"
          className="inline-block bg-rojoIber2 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rojoIber1 transition"
        >
          Solicita asesoría legal ahora
        </Link>
      </section>

    </main>
  );
};

export default Legal;
