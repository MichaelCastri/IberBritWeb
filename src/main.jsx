// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './i18n';
import { CookiesProvider } from 'react-cookie'; // 👈 Importar aquí

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider> {/* 👈 ENVOLVER App en CookiesProvider */}
      <App />
    </CookiesProvider>
  </StrictMode>
);
