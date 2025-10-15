import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.tsx';
import ArkkitehtisuunnitteluPage from './ArkkitehtisuunnitteluPage.tsx';
import RakennesuunnitteluPage from './RakennesuunnitteluPage.tsx';
import RakennuttajapalvelutPage from './RakennuttajapalvelutPage.tsx';
import KonsultointipalvelutPage from './KonsultointipalvelutPage.tsx';
import ProjektitPage from './ProjektitPage.tsx';
import YhteystiedotPage from './YhteystiedotPage.tsx';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
