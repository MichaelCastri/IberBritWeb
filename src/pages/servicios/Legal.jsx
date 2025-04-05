import React from "react";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <main className="w-full bg-white text-cafeOscuro">

      {/* Hero con fondo */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo2.webp')" }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-12 rounded-xl max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Asesoría Legal Mercantil en España
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Protege tu empresa y operaciones con el respaldo legal de Iberbrit. Constitución de sociedades, contratos, compliance y más.
          </p>
        </div>
      </section>

      {/* ¿Qué cubre nuestra asesoría legal? */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          ¿Qué cubre nuestra asesoría legal mercantil?
        </h2>
        <ul className="text-gray-700 text-lg leading-relaxed list-disc list-inside space-y-3">
          <li>Constitución de sociedades y modificaciones estatutarias.</li>
          <li>Redacción y revisión de contratos mercantiles y civiles.</li>
          <li>Asesoría en fusiones, adquisiciones y disoluciones empresariales.</li>
          <li>Compliance legal y adaptación normativa (protección de datos, prevención de blanqueo, etc.).</li>
          <li>Asistencia letrada en procedimientos judiciales mercantiles.</li>
          <li>Consultoría legal continua para empresas nacionales e internacionales.</li>
        </ul>
      </section>

      {/* Beneficios de nuestro servicio legal */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Beneficios de elegir Iberbrit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Asegura tu tranquilidad jurídica con un equipo especializado que entiende tanto la legislación española como los desafíos empresariales reales.
              </p>
              <p className="text-gray-700">
                Evita riesgos, litigios y sanciones gracias a contratos blindados y estrategias legales adaptadas a tu sector.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Iberbrit no solo asesora, sino que protege de forma activa a tu negocio, actuando con anticipación en todos los frentes legales.
              </p>
              <p className="text-gray-700">
                Trabajamos contigo en cada fase del ciclo de vida de tu empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro método de trabajo */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          ¿Cómo te ayudamos desde el primer día?
        </h2>
        <ol className="text-gray-700 text-lg list-decimal list-inside space-y-3">
          <li>Analizamos tu situación jurídica actual y objetivos.</li>
          <li>Diseñamos una estrategia legal personalizada.</li>
          <li>Redactamos y blindamos todos tus contratos y documentos clave.</li>
          <li>Ofrecemos acompañamiento preventivo y reactivo ante riesgos legales.</li>
          <li>Representamos tu empresa ante los tribunales si es necesario.</li>
        </ol>
      </section>

      {/* Diferencias frente a otros despachos */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            ¿Qué nos diferencia de otros despachos?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            En Iberbrit no creemos en soluciones estándar. Nuestro asesoramiento legal es 100% personalizado, práctico y orientado a resultados empresariales tangibles.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Apostamos por la cercanía, la proactividad y el dominio total del derecho mercantil español e internacional.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Preguntas frecuentes sobre asesoría legal
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-800">¿Qué documentos necesito para constituir una sociedad?</h3>
            <p className="text-gray-700">
              DNI/NIE de los socios, estatutos sociales y certificación negativa del nombre en el Registro Mercantil.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">¿Qué pasa si un contrato tiene cláusulas abusivas?</h3>
            <p className="text-gray-700">
              Nuestro equipo puede revisar y renegociar tus contratos para proteger tus intereses y garantizar su legalidad.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">¿Ofrecen defensa legal si tengo un litigio mercantil?</h3>
            <p className="text-gray-700">
              Sí. Contamos con abogados expertos en derecho mercantil que te representarán en cualquier instancia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="text-center py-16">
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
