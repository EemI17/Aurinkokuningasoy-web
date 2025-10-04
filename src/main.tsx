import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ArkkitehtisuunnitteluPage from './ArkkitehtisuunnitteluPage.tsx';
import RakennesuunnitteluPage from './RakennesuunnitteluPage.tsx';
import RakennuttajapalvelutPage from './RakennuttajapalvelutPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/arkkitehtisuunnittelu" element={<ArkkitehtisuunnitteluPage />} />
        <Route path="/rakennesuunnittelu" element={<RakennesuunnitteluPage />} />
        <Route path="/rakennuttajapalvelut" element={<RakennuttajapalvelutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
