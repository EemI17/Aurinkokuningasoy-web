import { StrictMode, useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import ArkkitehtisuunnitteluPage from './ArkkitehtisuunnitteluPage.tsx';
import RakennesuunnitteluPage from './RakennesuunnitteluPage.tsx';
import RakennuttajapalvelutPage from './RakennuttajapalvelutPage.tsx';
import KonsultointipalvelutPage from './KonsultointipalvelutPage.tsx';
import ProjektitPage from './ProjektitPage.tsx';
import YhteystiedotPage from './YhteystiedotPage.tsx';
import OpasPage from './OpasPage.tsx';
import './index.css';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

const rootElement = document.getElementById('root')!;
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/arkkitehtisuunnittelu" element={<ArkkitehtisuunnitteluPage />} />
          <Route path="/rakennesuunnittelu" element={<RakennesuunnitteluPage />} />
          <Route path="/rakennuttajapalvelut" element={<RakennuttajapalvelutPage />} />
          <Route path="/konsultointipalvelut" element={<KonsultointipalvelutPage />} />
          <Route path="/projektit" element={<ProjektitPage />} />
          <Route path="/yhteystiedot" element={<YhteystiedotPage />} />
          <Route path="/opas-rakennushankkeeseen" element={<OpasPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
