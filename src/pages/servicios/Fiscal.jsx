import React from "react";
import { Link } from "react-router-dom";

const Fiscal = () => {
  return (
    <main className="w-full bg-white text-cafeOscuro">
      {/* Hero con fondo */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo4.avif')" }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-12 rounded-xl max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Asesoría Fiscal y Contable en España
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Optimiza tu situación tributaria con nuestros economistas expertos. Gestionamos tus impuestos, contabilidad y cumplimiento fiscal de forma segura y estratégica.
          </p>
        </div>
      </section>

      {/* ¿Qué incluye nuestro servicio? */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          ¿Qué incluye nuestra asesoría fiscal?
        </h2>
        <ul className="text-gray-700 text-lg leading-relaxed list-disc list-inside space-y-3">
          <li>Planificación fiscal estratégica para autónomos y sociedades.</li>
          <li>Elaboración y presentación de impuestos: IVA, IRPF, Impuesto de Sociedades.</li>
          <li>Contabilidad adaptada a normativa vigente.</li>
          <li>Asesoramiento en inspecciones de la Agencia Tributaria.</li>
          <li>Legalización de libros contables oficiales.</li>
          <li>Representación ante organismos tributarios.</li>
        </ul>
      </section>

      {/* Beneficios */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Beneficios de contar con Iberbrit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Nuestro equipo de economistas asegura el máximo aprovechamiento de incentivos fiscales, minimiza riesgos tributarios y garantiza el cumplimiento de tus obligaciones.
              </p>
              <p className="text-gray-700">
                En Iberbrit convertimos la fiscalidad en una ventaja competitiva, liberándote de preocupaciones frente a la Agencia Tributaria.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Atención personalizada, revisión constante de tu situación fiscal y asesoramiento ante cualquier duda o consulta relacionada con tus impuestos.
              </p>
              <p className="text-gray-700">
                Nos enfocamos en la transparencia, la cercanía y el éxito fiscal de tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          ¿Cómo trabajamos en Iberbrit?
        </h2>
        <ol className="text-gray-700 text-lg list-decimal list-inside space-y-3">
          <li>Analizamos tu situación fiscal actual en una primera consulta gratuita.</li>
          <li>Planificamos estrategias fiscales a medida.</li>
          <li>Preparamos y presentamos tus declaraciones fiscales periódicamente.</li>
          <li>Representamos y defendemos tus intereses ante la Agencia Tributaria.</li>
          <li>Te acompañamos durante todo el ejercicio fiscal con soporte continuo.</li>
        </ol>
      </section>

      {/* Diferencias con una gestoría tradicional */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            ¿En qué nos diferenciamos de una gestoría tradicional?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Mientras las gestorías tradicionales solo tramitan tus impuestos, en Iberbrit diseñamos estrategias fiscales que impulsan el crecimiento de tu negocio. No somos meros intermediarios: somos tus socios estratégicos.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Con un equipo de economistas y asesores legales, tu asesoría fiscal será proactiva, precisa y adaptada a cada nueva normativa.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Preguntas frecuentes sobre asesoría fiscal
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-800">¿Qué impuestos deben presentar los autónomos?</h3>
            <p className="text-gray-700">
              IVA, IRPF, pagos fraccionados, modelos informativos anuales y, en algunos casos, IAE.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">¿Puedo delegar todas mis obligaciones fiscales en Iberbrit?</h3>
            <p className="text-gray-700">
              Sí. Nos encargamos integralmente de tu fiscalidad, presentaciones, requerimientos y representación ante Hacienda.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">¿Qué pasa si recibo una inspección de la Agencia Tributaria?</h3>
            <p className="text-gray-700">
              Nuestro equipo legal te acompañará en todo el proceso, defendiendo tus intereses y resolviendo cualquier incidencia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          ¿Listo para optimizar tu fiscalidad?
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
