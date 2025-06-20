import { useEffect } from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from '../pages/HomePage';

export function LanguageWrapper() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ['en', 'jp'].includes(lang)) {
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
    }
  }, [lang, i18n]);

  if (!lang || !['en', 'jp'].includes(lang)) {
    return <Navigate to="/en" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
    </Routes>
  );
}