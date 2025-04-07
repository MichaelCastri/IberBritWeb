import React from "react";
import { Link } from "react-router-dom";

const Laboral = () => {
  return (
    <main className="w-full bg-white text-cafeOscuro">

      {/* Hero con fondo */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo1.avif')" }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-12 rounded-xl max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Asesoría Laboral Integral
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Protege tu empresa y asegura el cumplimiento laboral con nuestro equipo experto. Gestión completa de nóminas, contratos, Seguridad Social e inspecciones.
          </p>
        </div>
      </section>

      {/* ¿Qué incluye nuestra asesoría laboral? */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          ¿Qué incluye nuestra asesoría laboral?
        </h2>
        <ul className="text-gray-700 text-lg leading-relaxed list-disc list-inside space-y-3">
          <li>Asesoramiento en contratación laboral y modalidades de contrato.</li>
          <li>Confección de nóminas, seguros sociales y finiquitos.</li>
          <li>Altas, bajas y variaciones en la Seguridad Social.</li>
          <li>Representación ante inspecciones de trabajo.</li>
          <li>Gestión de despidos y expedientes disciplinarios.</li>
          <li>Consultoría en prevención de riesgos laborales.</li>
        </ul>
      </section>

      {/* Beneficios de nuestra asesoría */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Beneficios de confiar en Iberbrit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Cumple con toda la legislación laboral vigente y evita sanciones o problemas legales. Te asesoramos en cada paso, protegiendo tanto tus intereses como los de tus empleados.
              </p>
              <p className="text-gray-700">
                Ahorrarás tiempo, reducirás riesgos laborales y garantizarás estabilidad en tu organización.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Confía en un equipo que se anticipa a los cambios normativos y te proporciona soluciones eficaces adaptadas a tu negocio.
              </p>
              <p className="text-gray-700">
                Iberbrit es sinónimo de experiencia, transparencia y compromiso en materia laboral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          ¿Cómo trabajamos contigo?
        </h2>
        <ol className="text-gray-700 text-lg list-decimal list-inside space-y-3">
          <li>Analizamos la situación laboral actual de tu empresa.</li>
          <li>Detectamos necesidades y optimizamos recursos humanos.</li>
          <li>Implantamos procesos seguros y eficientes en materia laboral.</li>
          <li>Realizamos un seguimiento continuo y actualizaciones normativas.</li>
          <li>Te representamos en todo momento ante la Seguridad Social e Inspección de Trabajo.</li>
        </ol>
      </section>

      {/* Diferencias con otros despachos */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            ¿Por qué elegir Iberbrit para tu asesoría laboral?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            No solo resolvemos trámites. Construimos una estrategia laboral sólida y de futuro para tu empresa. Detectamos oportunidades de ahorro en costes laborales y maximizamos tu seguridad jurídica.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Nuestra asesoría laboral es proactiva, cercana y 100% adaptada a la normativa española vigente.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Preguntas frecuentes sobre asesoría laboral
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-800">¿Qué documentación necesito para contratar empleados?</h3>
            <p className="text-gray-700">
              Documento de identidad del trabajador, número de afiliación a la Seguridad Social y contrato firmado.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">¿Qué incluye una inspección de trabajo?</h3>
            <p className="text-gray-700">
              Revisión de contratos, cumplimiento de cotizaciones, condiciones laborales y prevención de riesgos.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">¿Qué sucede si recibo una sanción?</h3>
            <p className="text-gray-700">
              En Iberbrit te asistimos en la defensa y, en su caso, en la tramitación de recursos ante la Inspección de Trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="text-center py-16">
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
