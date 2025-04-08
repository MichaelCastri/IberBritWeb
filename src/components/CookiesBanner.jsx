import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";

const CookiesBanner = () => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const aceptarCookies = () => {
    const scripts = document.querySelectorAll('script[data-cookiecategory="analytics"]');
    scripts.forEach((script) => {
      const newScript = document.createElement('script');
      Array.from(script.attributes).forEach(attr => {
        if (attr.name !== 'type' && attr.name !== 'data-cookiecategory') {
          newScript.setAttribute(attr.name, attr.value);
        }
      });
      newScript.innerHTML = script.innerHTML;
      document.body.appendChild(newScript);
    });
    setAnalyticsEnabled(true);
  };

  const rechazarCookies = () => {
    setAnalyticsEnabled(false);
    console.log("Cookies analíticas deshabilitadas");
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar Cookies"
      declineButtonText="Rechazar"
      enableDeclineButton
      cookieName="iberbritConsent"
      style={{ background: "#1B1213", fontSize: "14px", zIndex: "9999" }}
      buttonStyle={{ background: "#CD2228", color: "#fff", fontSize: "14px", borderRadius: "8px", padding: "8px 20px" }}
      declineButtonStyle={{ background: "#555", color: "#fff", fontSize: "14px", borderRadius: "8px", padding: "8px 20px" }}
      expires={150}
      onAccept={aceptarCookies}
      onDecline={rechazarCookies}
    >
      Usamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y mostrar publicidad personalizada.{" "}
      <a href="/politicas-cookies" style={{ color: "#CD2228", textDecoration: "underline", marginLeft: "4px" }}>
        Leer más
      </a>
    </CookieConsent>
  );
};

export default CookiesBanner;
