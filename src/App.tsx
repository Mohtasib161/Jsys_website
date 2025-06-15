import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { LanguageWrapper } from './components/LanguageWrapper';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/:lang/*" element={<LanguageWrapper />} />
          <Route path="/" element={<Navigate to="/en" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;