import React from "react";

const PoliticaCookies = () => {
  return (
    <main className="w-full bg-white text-cafeOscuro py-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Política de Cookies</h1>

      <section className="space-y-6 text-gray-700">
        <p>
          Este sitio web utiliza cookies propias y de terceros para optimizar su navegación, analizar el tráfico y personalizar la experiencia del usuario.
        </p>
        <p>
          Las cookies son pequeños archivos de texto almacenados en tu dispositivo al visitar un sitio web. Puedes configurar tu navegador para aceptar o rechazar cookies, o eliminar las existentes.
        </p>
        <p>
          Utilizamos Google Analytics para analizar cómo los visitantes usan este sitio web. La IP del usuario se anonimiza antes de ser transmitida a Google. Puedes desactivar el uso de cookies de Google Analytics <a href="https://tools.google.com/dlpage/gaoptout" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">aquí</a>.
        </p>
        <p>
          Para más información sobre nuestra política de cookies, puedes ponerte en contacto con nosotros en info@iberbrit.com.
        </p>
      </section>
    </main>
  );
};

export default PoliticaCookies;
