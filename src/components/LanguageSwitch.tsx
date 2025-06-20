import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'jp', name: '日本語', flag: '🇯🇵' },
];

type LanguageDropdownProps = {
  onSelect?: () => void;
};

const LanguageDropdown = ({ onSelect }: LanguageDropdownProps) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLang, setSelectedLang] = useState('en');

  useEffect(() => {
    const defaultLang = localStorage.getItem('lang') || navigator.language.split('-')[0] || 'en';

    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', defaultLang);
    }

    const pathSegments = location.pathname.split('/');
    if (languages.some((lang) => lang.code === pathSegments[1])) {
      pathSegments[1] = defaultLang;
    } else {
      pathSegments.splice(1, 0, defaultLang);
    }

    const newPath = pathSegments.join('/') || '/';
    navigate(newPath);
    setSelectedLang(defaultLang);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setSelectedLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);

    const pathSegments = location.pathname.split('/');
    if (languages.some((lang) => lang.code === pathSegments[1])) {
      pathSegments[1] = newLang;
    } else {
      pathSegments.splice(1, 0, newLang);
    }

    const newPath = pathSegments.join('/') || '/';
    navigate(newPath);

    onSelect?.();
  };

  return (
    <div className="relative inline-block">
      <select
        value={selectedLang}
        onChange={handleLanguageChange}
        className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.flag} {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;
